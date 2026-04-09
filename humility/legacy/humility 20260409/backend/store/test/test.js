// test.js

import * as store from '../index.js';

async function run() {
  console.log('--- list sessions (initial) ---');
  console.log(await store.list());

  console.log('--- create session ---');
  const session = await store.create();
  console.log('session id:', session);

  console.log('--- record moves ---');
  await store.move({
    session,
    type: 'plan',
    data: { intention: 'test storage' }
  });

  await store.move({
    session,
    type: 'process',
    data: { result: 'nothing happened' }
  });

  console.log('--- see moves ---');
  console.log(await store.see({ session }));

  process.exit(0);
}

run();
