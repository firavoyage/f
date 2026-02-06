// schema.js

export const session_table = `
create table if not exists session (
  id uuid primary key default gen_random_uuid(),
  time timestamptz not null default now(),
  state jsonb not null,
  note text
);
`;

export const move_table = `
create table if not exists move (
  id uuid primary key default gen_random_uuid(),
  time timestamptz not null default now(),
  type text not null,
  session uuid not null references session(id),
  data jsonb not null
);
`;
