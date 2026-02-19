type ok = { type: 'ok'; value?: any }
type err = { type: 'err'; error: string }
export type result = ok | err

export type context = {
  working_directory: string
}
