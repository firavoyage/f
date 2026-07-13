export const prompt = ({ task, folder, progress, turn }) => {
  return `
task:
${task}

rules:
- write markdown files
- write one small chapter per turn
- always update progress.md
- use tool code blocks only. 

the language after three backticks should be tool. 
the first line should start with write, and then the file.
the second to last lines will be the content.

- stop when finished

folder shape:
${folder}

progress:
${progress}

tools:

- write: create/overwrite an entire file

example:

write hello_world.md
# hello world
hi everyone

output two tool code blocks:
- write the next small chapter
- write progress.md
`;
};
