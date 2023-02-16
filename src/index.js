import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // only works in development runs every thing twice for robustness which includes use effect hooks re renders disable it by just commenting it out
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
