import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Generate star box-shadows dynamically (better than CSS-only for performance)
function generateStars(n, size) {
  const shadows = []
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000)
    const y = Math.floor(Math.random() * 2000)
    shadows.push(`${x}px ${y}px #FFF`)
  }
  return shadows.join(', ')
}

const s1 = document.getElementById('stars')
const s2 = document.getElementById('stars2')
const s3 = document.getElementById('stars3')
if (s1) { s1.style.boxShadow = generateStars(350, 1); if (s1.after) s1.after.style.boxShadow = s1.style.boxShadow }
if (s2) { s2.style.boxShadow = generateStars(100, 2); }
if (s3) { s3.style.boxShadow = generateStars(50,  3); }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)