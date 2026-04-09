// moves.js

export function moves({ client }) {
  async function see({ session }) {
    const result = await client.query(
      `select id, time, type, data
       from move
       where session = $1
       order by time asc`,
      [session]
    );

    return result.rows;
  }

  async function move({ session, type, data }) {
    const result = await client.query(
      `insert into move (session, type, data)
       values ($1, $2, $3)
       returning id`,
      [session, type, data]
    );

    return result.rows[0].id;
  }

  return {
    see,
    move
  };
}
