import { render } from 'preact'
import './index.css'
import { App } from './app.tsx'
import { PayTransparency } from './PayTransparency.tsx'

const path = window.location.pathname
const Component = path.startsWith('/pay_transparency') ? PayTransparency : App

render(<Component />, document.getElementById('app')!)
