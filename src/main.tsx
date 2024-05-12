import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Swiperblk/App'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/null.css'
import './styles/fonts.css'
import './components/Header/media.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
