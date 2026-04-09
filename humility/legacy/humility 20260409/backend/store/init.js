import os from 'os';
import path from 'path';
import fs from 'fs';
import { spawnSync, execSync } from 'child_process';
import pg from 'pg';

import { session_table, move_table } from './schema.js';
import { sessions } from './sessions.js';
import { moves } from './moves.js';

const { Client } = pg;

// -----------------------------
// Helpers
// -----------------------------
function find_bin(name) {
  try {
    return execSync(`which ${name}`, { encoding: 'utf-8' }).trim();
  } catch {
    throw new Error(`Postgres binary not found in PATH: ${name}`);
  }
}

function ensure_dir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function spawn_sync(command, args, options = {}) {
  return spawnSync(command, args, { stdio: 'inherit', ...options });
}

async function connect({ client, timeout = 5000 }) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      await client.connect();
      return client;
    } catch {
      await new Promise(r => setTimeout(r, 500));
    }
  }
  throw new Error('Failed to connect to Postgres');
}

// -----------------------------
// Constants
// -----------------------------
const INITDB = find_bin('initdb');
const PGCTL = find_bin('pg_ctl');

const db_config = {
  name: 'humility',
  user: 'fira',
  password: 'fira',
  host: '127.0.0.1',
  port: 5433
};

const root_dir = path.join(os.homedir(), '.humility/storage');
const data_dir = path.join(root_dir, 'data');
const logfile = path.join(root_dir, 'logfile');

// -----------------------------
// Cluster functions
// -----------------------------
function init_cluster() {
  if (!fs.existsSync(path.join(data_dir, 'PG_VERSION'))) {
    console.log('Initializing Postgres cluster in', data_dir);
    ensure_dir(data_dir);
    spawn_sync(INITDB, ['-D', data_dir, '-U', db_config.user, '-A', 'trust']);
  }
}

function is_running() {
  const status = spawnSync(PGCTL, ['-D', data_dir, 'status'], { stdio: 'pipe', encoding: 'utf-8' });
  return status.status === 0;
}

function start_cluster() {
  console.log('Starting Postgres...');
  spawn_sync(PGCTL, [
    '-D', data_dir,
    '-o', `-p ${db_config.port} -k ${root_dir}`,
    '-l', logfile,
    'start'
  ]);
}

// -----------------------------
// Database functions
// -----------------------------
async function create_database() {
  const client = new Client({ ...db_config, database: 'postgres' });
  await connect({ client });

  try {
    await client.query(`CREATE DATABASE ${db_config.name}`);
  } catch {
    // todo
  } // ignore if exists

  await client.end();
}

async function create_tables({ client }) {
  await client.query(`CREATE EXTENSION IF NOT EXISTS pgcrypto`);
  await client.query(session_table);
  await client.query(move_table);
}

// -----------------------------
// Main API
// -----------------------------
export async function init() {
  ensure_dir(root_dir);
  init_cluster();

  if (!is_running()) start_cluster();

  await create_database();

  const client = new Client({ ...db_config, database: db_config.name });
  await connect({ client });

  await create_tables({ client });

  const session_api = sessions({ client });
  const move_api = moves({ client });

  console.log('Self-contained Postgres ready. Data stored in:', data_dir);

  return {
    list: session_api.list,
    create: session_api.create,
    see: move_api.see,
    move: move_api.move
  };
}

export async function init_store() {
  ensure_dir(root_dir);
  init_cluster();

  if (!is_running()) start_cluster();

  await create_database();

  const client = new Client({ ...db_config, database: db_config.name });
  await connect({ client });

  await create_tables({ client });

  const session_api = sessions({ client });
  const move_api = moves({ client });

  return {
    list: session_api.list,
    create: session_api.create,
    see: move_api.see,
    move: move_api.move
  };
}