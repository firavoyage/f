import * as thing from './thing.js';
import * as link from './link.js';
import * as session from './session.js';

let cursor = {
  session: null,
  step: null,
};

export async function create(name) {
  const root = await thing.add('root', {});
  const id = await session.create(name, root.id);
  cursor = { session: id, step: root.id };
  return id;
}

export async function list() {
  return session.list();
}

export async function pick(id) {
  const s = await session.get(id);
  if (!s) throw new Error('flow.pick: invalid session');
  const last = await session.last(s.root_id);
  cursor = { session: id, step: last };
}

export async function step(id) {
  cursor.step = id;
}

export async function write(type, data) {
  const next = await thing.add(type, data);
  await link.add(cursor.step, next.id, 'next');
  cursor.step = next.id;
  return next;
}

export async function read() {
  return thing.get(cursor.step);
}

export async function back() {
  const prev = await link.prev(cursor.step);
  if (prev) cursor.step = prev;
  return cursor.step;
}

export async function view() {
  const s = await session.get(cursor.session);
  const path = await link.path(s.root_id, cursor.step);

  return {
    session: s.id,
    current: cursor.step,
    count: path.length,
    path,
  };
}