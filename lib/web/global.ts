import 'lib/global'
import { use } from 'lib/global'

// Prelude for Web
import * as react from 'react'
use(react)

import * as hooks from 'lib/web/react'
use(hooks)

import * as p from 'lib/web/props'
use(p)

import * as state from 'lib/web/state'
use(state)

import * as hyperscript from 'lib/web/hyperscript'
use(hyperscript)

// override react.use
use({ use })
