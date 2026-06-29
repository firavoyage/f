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

export async function openai_compatible({ message, url, api_key }) {

}

/**
 * request models
 */
export async function request({ message, model, provider }: any) {
  const start_at = Date.now()
  // one param, no need to have obj params. no future proof.

  const finish_at = Date.now()

  return { response: mock({ message }), start_at, finish_at }
}