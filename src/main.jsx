
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ← Añade esto
import App from '../src/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ← Envuelve tu App con esto */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)