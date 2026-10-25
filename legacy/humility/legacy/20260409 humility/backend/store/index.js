// store/index.js

import { init_store } from './init.js';

let store = null;
let ready = false;

async function ensure() {
  if (!ready) {
    store = await init_store();
    ready = true;
  }
  return store;
}

export async function list() {
  const s = await ensure();
  return s.list();
}

export async function create() {
  const s = await ensure();
  return s.create();
}

export async function see({ session }) {
  const s = await ensure();
  return s.see({ session });
}

export async function move({ session, type, data }) {
  const s = await ensure();
  return s.move({ session, type, data });
}
