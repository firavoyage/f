import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { PGlite } from '@electric-sql/pglite';

const dir = path.join(os.homedir(), '.local/share/humility/storage');
const key = '__humility_pglite';

export async function db() {
  if (globalThis[key]) return globalThis[key];

  await fs.mkdir(dir, { recursive: true });
  const pg = await PGlite.create(dir);

  await pg.exec(`
    CREATE TABLE IF NOT EXISTS things (
      id text PRIMARY KEY,
      time timestamptz DEFAULT now(),
      type text NOT NULL,
      data jsonb NOT NULL
    );

    CREATE TABLE IF NOT EXISTS links (
      id text PRIMARY KEY,
      from_id text NOT NULL,
      to_id text NOT NULL,
      kind text NOT NULL,
      time timestamptz DEFAULT now(),
      data jsonb
    );

    CREATE TABLE IF NOT EXISTS sessions (
      id text PRIMARY KEY,
      time timestamptz DEFAULT now(),
      name text NOT NULL,
      root_id text NOT NULL,
      data jsonb
    );
  `);

  globalThis[key] = pg;
  return pg;
}

export { dir };