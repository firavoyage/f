import { db } from '../db.js';

async function see() {
  const pg = await db();

  const sessions = await pg.query(`
    SELECT *
    FROM sessions
    ORDER BY time DESC
    LIMIT 100;
  `);

  const things = await pg.query(`
    SELECT *
    FROM things
    ORDER BY time DESC
    LIMIT 100;
  `);

  const links = await pg.query(`
    SELECT *
    FROM links
    ORDER BY time DESC
    LIMIT 100;
  `);

  return {
    sessions: sessions.rows,
    things: things.rows,
    links: links.rows
  };
}

see()
  .then(db => {
    console.log('\n=== SESSIONS ===');
    console.dir(db.sessions, { depth: null });

    console.log('\n=== THINGS ===');
    console.dir(db.things, { depth: null });

    console.log('\n=== LINKS ===');
    console.dir(db.links, { depth: null });

    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });