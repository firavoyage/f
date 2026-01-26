import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { PGlite } from '@electric-sql/pglite';

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

export async function init() {
  await create_pg();
  return { dir: datadir };
}