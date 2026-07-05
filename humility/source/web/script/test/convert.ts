import { stringify } from "yaml"
import { main } from "../convert"

const design = {
  modes: {
    theme: ["light", "dark"],
    density: ["comfortable", "compact", "cozy"],
  },
  palette: {
    blue: {
      1: "#123",
      2: {
        value: "#456",
        dark: "#789"
      }
    }
  },
  color: {
    primary: "palette.blue.1",
    secondary: "{palette.blue.2}",
    teriary: {
      value: 'foo.bar',
      // comfortable: 'barbar', // will err
      cozy: 'hello'
    }
  }
}

await main(stringify(design))
