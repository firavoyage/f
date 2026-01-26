// test/test.js
import { init } from "../init.js";
import { add } from "../write.js";
import { get, list, see } from "../read.js";

function log(title, value) {
  console.log(`\n== ${title} ==`);
  console.dir(value, { depth: null });
}

async function run() {
  console.log("starting test");

  await init();

  const a = await add("note", { text: "first thing" });
  const b = await add("thought", { mood: "curious", level: 7 });
  const c = await add("note", { text: "second thing" });

  log("added", { a, b, c });

  const ga = await get(a.id);
  const gb = await get(b.id);

  log("get a", ga);
  log("get b", gb);

  const all = await list();
  log("list all ids", all);

  // const mid = await list({ begin: a.time, end: c.time });
  // log("list by time range", mid);

  const overview = await see();
  log("see", overview);

  console.log("\ntest done");
}

async function view() {
  console.log("starting test");

  await init();

  const all = await list();
  log("list all ids", all);

  const overview = await see();
  log("see", overview);

  console.log("\ntest done");
}

view().catch((err) => {
  console.error("test failed");
  console.error(err);
  process.exit(1);
});
