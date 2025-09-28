import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/styles.css'

/**
 * Respect system theme on first paint:
 * If localStorage has 'theme', use it. Otherwise, use prefers-color-scheme.
 */
const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const initial = saved || (prefersDark ? 'dark' : 'light')
document.documentElement.setAttribute('data-theme', initial)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
