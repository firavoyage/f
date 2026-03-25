// note: always check type before accessing value or error
// note: be careful with the number of `../` (parent folders) 

type ok = { err: false; value?: any }
type err = { err: true; error?: string | object }
export type result = ok | err

// type ok = { type: 'ok'; value?: any }
// type err = { type: 'err'; error: string }
// export type result = ok | err

export type context = {
  working_directory: string
}

