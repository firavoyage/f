import { v4 as uuid } from 'uuid';
import { db } from './db.js';

export async function create(name, root_id, data = null) {
  const pg = await db();
  const id = uuid();

  await pg.query(
    'INSERT INTO sessions (id, name, root_id, data) VALUES ($1, $2, $3, $4::jsonb);',
    [id, name, root_id, data ? JSON.stringify(data) : null]
  );

  return id;
}

export async function get(id) {
  const pg = await db();
  const res = await pg.query(
    'SELECT * FROM sessions WHERE id = $1 LIMIT 1;',
    [id]
  );
  return res.rows[0] || null;
}

export async function list() {
  const pg = await db();
  const res = await pg.query(
    'SELECT id, name, time FROM sessions ORDER BY time DESC;'
  );
  return res.rows;
}

export async function last(root_id) {
  const pg = await db();
  let cur = root_id;

  while (true) {
    const res = await pg.query(
      'SELECT to_id FROM links WHERE from_id = $1 AND kind = $2 ORDER BY time ASC LIMIT 1;',
      [cur, 'next']
    );
    if (!res.rows[0]) return cur;
    cur = res.rows[0].to_id;
  }
}