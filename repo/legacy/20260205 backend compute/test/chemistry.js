import { agent } from "../agent.js";

const task = "create a comprehensive high school chemistry reference";

// hardcoded working directory (you init it yourself)
const root = "/home/fira/Documents/chemistry";

// run 5 iterations only
await agent({
  task,
  root,
  turns: 10,
});