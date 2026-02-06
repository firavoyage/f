import { v4 as uuid } from 'uuid';
import { db } from './db.js';

export async function add(from, to, kind, data = null) {
  const pg = await db();
  const id = uuid();

  await pg.query(
    'INSERT INTO links (id, from_id, to_id, kind, data) VALUES ($1, $2, $3, $4, $5::jsonb);',
    [id, from, to, kind, data ? JSON.stringify(data) : null]
  );
}

export async function next(id) {
  const pg = await db();
  const res = await pg.query(
    'SELECT to_id FROM links WHERE from_id = $1 AND kind = $2 ORDER BY time ASC LIMIT 1;',
    [id, 'next']
  );
  return res.rows[0]?.to_id || null;
}

export async function prev(id) {
  const pg = await db();
  const res = await pg.query(
    'SELECT from_id FROM links WHERE to_id = $1 AND kind = $2 ORDER BY time DESC LIMIT 1;',
    [id, 'next']
  );
  return res.rows[0]?.from_id || null;
}

export async function path(root, end) {
  const out = [];
  let cur = end;

  while (cur) {
    out.push(cur);
    if (cur === root) break;
    cur = await prev(cur);
  }

  return out.reverse();
}