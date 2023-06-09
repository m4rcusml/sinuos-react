import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Menu from './Menu'
import Main from './MainContainer'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Main />
  </React.StrictMode>
)
