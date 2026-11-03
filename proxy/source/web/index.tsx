import 'the-new-css-reset/css/reset.css'
import 'lib/web/reset.css'

import 'lib/web/global'

import { createRoot } from 'react-dom/client'

import { App } from './component/app'

createRoot(document.getElementById('root')).render(<App />)
