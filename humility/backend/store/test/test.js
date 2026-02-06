// test.js

import { init } from '../init.js';

async function run() {
  const store = await init();

  console.log('--- list sessions (initial) ---');
  const before = await store.list();
  console.log(before);

  console.log('--- create session ---');
  const session = await store.create({
    state: { mood: 'quiet' },
    note: 'test session'
  });
  console.log('session id:', session);

  console.log('--- record moves ---');
  await store.move({
    session,
    type: 'plan',
    data: { intention: 'test storage' }
  });

  await store.move({
    session,
    type: 'request',
    data: { model: 'none' }
  });

  await store.move({
    session,
    type: 'process',
    data: { result: 'nothing happened' }
  });

  console.log('--- see moves ---');
  const moves = await store.see({ session });
  console.log(moves);

  console.log('--- list sessions (after) ---');
  const after = await store.list();
  console.log(after);

  process.exit(0);
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
