import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Swiperblk/App'
import Header from './components/Header/Header'
import './styles/null.css'
import './styles/fonts.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
