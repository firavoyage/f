import assert from 'node:assert/strict';
import * as flow from '../flow.js';

async function test() {
  // create session
  const session = await flow.create('test');
  assert.ok(session, 'session created');

  // write first
  const a = await flow.write('thought', { text: 'start' });
  assert.equal(a.data.text, 'start');

  // write second
  const b = await flow.write('thought', { text: 'next' });
  assert.equal(b.data.text, 'next');

  // read current
  const cur = await flow.read();
  assert.equal(cur.data.text, 'next');

  // go back
  await flow.back();
  const back = await flow.read();
  assert.equal(back.data.text, 'start');

  // branch
  const c = await flow.write('thought', { text: 'branch' });
  assert.equal(c.data.text, 'branch');

  // view
  const view = await flow.view();
  assert.equal(view.count, 3);
  assert.equal(view.path.at(-1), c.id);

  console.log('ok');
}

test().catch(err => {
  console.error(err);
  process.exit(1);
});