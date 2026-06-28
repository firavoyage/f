type request_params = { message: string }

export async function mock({ message }: any) {
  // one param, no need to have obj params. no future proof.

  return `Write a response to ${message.toLocaleLowerCase()}`
}

/**
 * request models
 */
export async function request({ message }: any) {
  // one param, no need to have obj params. no future proof.

  return `response: ${message.toLocaleLowerCase()}`
}