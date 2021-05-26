import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/tailwind.css'
import Routes from './Routes'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Routes />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
)
