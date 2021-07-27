import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import Root from './Root'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  rootElement
)
reportWebVitals(console.log)
