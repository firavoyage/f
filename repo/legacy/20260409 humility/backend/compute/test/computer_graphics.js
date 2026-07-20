import { begin } from "../begin.js";
import { join } from "node:path";
import { mkdir } from "node:fs/promises";

/**
 * run computer graphics test
 * clearly instructs agent to write, test, and self-correct
 */
export const run_test = async () => {
  const working_directory = join(process.env.HOME || "~", "test");
  await mkdir(working_directory, { recursive: true });

  const task = `
Create a computer graphics library function:
- write a function that generates a 2D or 3D shape
- include examples/tests
- run the tests
- if tests fail, self-correct
- iterate until tests pass
`;

  await begin({ working_directory, task });
};

run_test();