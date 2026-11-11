import 'lib/global'
import { use } from 'lib/global'

// Prelude for Web
import * as react from 'react'
use(react)

// override react.use
use({ use })

import * as react_use from 'react-use'
use(react_use)

import * as react_hooks from 'lib/web/react'
use(react_hooks)

import * as p from 'lib/web/props'
use(p)

import * as state from 'lib/web/state'
use(state)

import * as component from 'lib/web/component'
use(component)

import * as hyperscript from 'lib/web/hyperscript'
use(hyperscript)
