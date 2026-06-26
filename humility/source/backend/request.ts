/**
 * request models
 */
export async function request(message: string) {
  // one param, no need to have obj params. no future proof.

  return `response: ${message.toLocaleLowerCase()}`
}