import 'the-new-css-reset/css/reset.css'
import 'lib/web/reset.css'
import 'lib/web/global'
import 'web/design/utilitarian.css'
import './storybook.css'

import { createRoot } from 'react-dom/client'

import { app } from './app'

createRoot(document.getElementById('root')).render(h(app))
