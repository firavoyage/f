/**
 * you can request any standard js fn or supported web api (localhost or remote),
 * 
 * e.g as a param of openai_compatible
 * 
 * (normalize if needed, like openai change, claude code special tokens)
 * 
 * 
 */


type request_params = { message: string }

export async function mock({ message }: any) {
  // one param, no need to have obj params. no future proof.

  return `Respond to ${message.toLocaleLowerCase()}`
}

/**
 * request models
 */
export async function request({ message }: any) {
  // one param, no need to have obj params. no future proof.

  return mock({ message })
}