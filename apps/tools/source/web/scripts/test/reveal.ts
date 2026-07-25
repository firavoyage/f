import { convert_hex_to_oklch } from "../convert hex to oklch";
import { reveal } from "../reveal accent";

// log(reveal("#222226", "#38383C", 0.3))
// log(reveal("#FAFAFB", "#E6E6E7", 0.3))

// log(reveal("#222226", "#38383C", 0.2))
// log(reveal("#FAFAFB", "#E6E6E7", 0.2))

// log(reveal("#222226", "#38383C", 0.15))
// log(reveal("#FAFAFB", "#E6E6E7", 0.15))

for (const opacity of each(0.15, 0.6, 0.01)) {
  log(opacity,
    convert_hex_to_oklch(reveal("#FAFAFB", "#E6E6E7", opacity)),
    convert_hex_to_oklch(reveal("#222226", "#38383C", opacity)),
  )
}

