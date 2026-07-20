import { convertHexToOklchPure } from "../modernize"

const text = `
  accent:
    blue: #3584e4
    teal: #2190a4
    green: #3a944a
    yellow: #c88800
    orange: #ed5b00
    red: #e62d42
    pink: #d56199
    purple: #9141ac
    slate: #6f8396
`

log(convertHexToOklchPure(text).replaceAll('"', ''))

// log(convertHexToOklchPure(text))