import path from 'path';
import os from 'os';
import { PGlite } from '@electric-sql/pglite';
import fs from 'fs/promises';
import { v4 as uuid } from 'uuid';

const datadir = path.join(os.homedir(), '.local/share/humility/storage');
const global_key = '__humility_pglite';

async function create_pg() {
  if (globalThis[global_key]) return globalThis[global_key];
  await fs.mkdir(datadir, { recursive: true });
  const pg = await PGlite.create(datadir);

  await pg.exec(`
    CREATE TABLE IF NOT EXISTS things (
      id text PRIMARY KEY,
      time timestamptz DEFAULT now(),
      type text NOT NULL,
      data jsonb NOT NULL
    );
  `);

  globalThis[global_key] = pg;
  return pg;
}

export async function add(type, data) {
  if (!type) throw new Error('add: missing type');
  const pg = await create_pg();
  const id = uuid();

  const res = await pg.query(
    'INSERT INTO things (id, type, data) VALUES ($1, $2, $3::jsonb) RETURNING id, time;',
    [id, type, JSON.stringify(data)]
  );

  const row = res.rows?.[0];
  if (!row) throw new Error('add: insert failed');
  return { id: row.id, time: row.time };
}