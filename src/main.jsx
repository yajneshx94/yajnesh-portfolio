import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function generateStars(n) {
  const shadows = []
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000)
    const y = Math.floor(Math.random() * 2000)
    shadows.push(`${x}px ${y}px #FFF`)
  }
  return shadows.join(', ')
}

window.addEventListener('DOMContentLoaded', () => {
  const s1 = document.getElementById('stars')
  const s2 = document.getElementById('stars2')
  const s3 = document.getElementById('stars3')
  if (s1) s1.style.boxShadow = generateStars(350)
  if (s2) s2.style.boxShadow = generateStars(100)
  if (s3) s3.style.boxShadow = generateStars(50)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)