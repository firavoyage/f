// sessions.js

export function sessions({ client }) {
  async function list() {
    const result = await client.query(
      `select id from session order by time asc`
    );
    return result.rows.map(r => r.id);
  }

  async function create({ state, note }) {
    const result = await client.query(
      `insert into session (state, note)
       values ($1, $2)
       returning id`,
      [state, note ?? null]
    );

    return result.rows[0].id;
  }

  return {
    list,
    create
  };
}
