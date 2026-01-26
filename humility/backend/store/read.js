import path from "path";
import os from "os";
import { PGlite } from "@electric-sql/pglite";
import fs from "fs/promises";

const datadir = path.join(os.homedir(), ".local/share/humility/storage");
const global_key = "__humility_pglite";

async function create_pg() {
  if (globalThis[global_key]) return globalThis[global_key];
  await fs.mkdir(datadir, { recursive: true });
  const pg = await PGlite.create(datadir);
  await pg.exec(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS things (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      time timestamptz DEFAULT now(),
      type text NOT NULL,
      data jsonb NOT NULL
    );
  `);
  globalThis[global_key] = pg;
  return pg;
}

export async function get(id) {
  if (!id) throw new Error("get: missing id");
  const pg = await create_pg();
  const res = await pg.query(
    "SELECT time, type, data FROM things WHERE id = $1 LIMIT 1;",
    [id]
  );
  const row = res.rows?.[0];
  if (!row) return null;

  let parsed = row.data;
  if (typeof parsed === "string") {
    try {
      parsed = JSON.parse(parsed);
    } catch {}
  }

  return { time: row.time, type: row.type, data: parsed };
}

export async function list({ begin, end } = {}) {
  const pg = await create_pg();

  if (!begin && !end) {
    const res = await pg.query("SELECT id FROM things ORDER BY time ASC;");
    return (res.rows || []).map((r) => r.id);
  }

  const conds = [];
  const params = [];
  if (begin) {
    params.push(new Date(begin).toISOString());
    conds.push(`time >= $${params.length}`);
  }
  if (end) {
    params.push(new Date(end).toISOString());
    conds.push(`time <= $${params.length}`);
  }

  const sql = `SELECT id FROM things ${
    conds.length ? "WHERE " + conds.join(" AND ") : ""
  } ORDER BY time ASC;`;
  const res = await pg.query(sql, params);
  return (res.rows || []).map((r) => r.id);
}

export async function see() {
  const pg = await create_pg();

  const cnt = await pg.query("SELECT count(*)::bigint AS count FROM things;");
  const count = Number(cnt.rows?.[0]?.count || 0);

  const firstRow =
    (await pg.query("SELECT id, time FROM things ORDER BY time ASC LIMIT 1;"))
      .rows?.[0] || null;
  const lastRow =
    (await pg.query("SELECT id, time FROM things ORDER BY time DESC LIMIT 1;"))
      .rows?.[0] || null;

  const typesRes = await pg.query(
    "SELECT type, count(*)::bigint AS count FROM things GROUP BY type ORDER BY count DESC;"
  );
  const types = (typesRes.rows || []).map((r) => ({
    type: r.type,
    count: Number(r.count),
  }));

  return {
    dir: datadir,
    count,
    first: firstRow ? { id: firstRow.id, time: firstRow.time } : null,
    last: lastRow ? { id: lastRow.id, time: lastRow.time } : null,
    types,
  };
}
