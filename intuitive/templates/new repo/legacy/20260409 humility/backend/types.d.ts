// note: always check type before accessing value or error
// note: be careful with the number of `../` (parent folders) 

type ok = { err: false; value?: any }
type err = { err: true; error?: string | object }
export type result = ok | err

// why: feel right to check if err (a verb) and print error (a noun).

// type ok = { err: false; value?: any }
// type err = { err: object }
// export type result = ok | err

// why: hacky (js feature: truthy/falsy). 

// type ok = { type: 'ok'; value?: any }
// type err = { type: 'err'; error: string }
// export type result = ok | err

// why: verbose to write if (type==="err"). 
// most time we only check if err and then return (avoid nesting hells)

// todo: deprecate it itself, or move to the project types (not the std types)

export type context = {
  working_directory: string
}

