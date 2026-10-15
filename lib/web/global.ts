import 'lib/global'
import { use } from 'lib/global'

// Prelude for Web
import * as react from 'react'
import * as react_use from 'react-use'
import * as react_hooks from 'lib/web/react'
import * as p from 'lib/web/props'
import * as state from 'lib/web/state'
use(react)
use(react_use)
use(react_hooks)
use(p)
use(state)

// override react.use (you never utilize react.use)
use({ use })

// type use = typeof use
// declare global {
//   var use: use
// }
