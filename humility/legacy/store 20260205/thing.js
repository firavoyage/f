import { v4 as uuid } from 'uuid';
import { db } from './db.js';

export async function add(type, data) {
  if (!type) throw new Error('thing.add: missing type');
  const pg = await db();
  const id = uuid();

  const res = await pg.query(
    'INSERT INTO things (id, type, data) VALUES ($1, $2, $3::jsonb) RETURNING id, time;',
    [id, type, JSON.stringify(data)]
  );

  const row = res.rows[0];
  return {
    id: row.id,
    time: row.time,
    type,
    data
  };
}

export async function get(id) {
  const pg = await db();
  const res = await pg.query(
    'SELECT id, time, type, data FROM things WHERE id = $1 LIMIT 1;',
    [id]
  );
  return res.rows[0] || null;
}