import { send } from "../send.js";

(async () => {
  const result = send("give me a list of 10 famous people", "chatgpt");

//   const result = send(
//     `
// hello
  
// world
//     `,
//     "chatgpt"
//   );

  // const result2 = send("give me a list of 5 famous people", "chatgpt");
  console.log(await result);
  // console.log(await result2);
})();
