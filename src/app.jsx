import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Inicio from './Inicio'
import Desenvolvedores from './Desenvolvedores'

import LogoBanner from './components/LogoBanner'

import './app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Menu />
    <main>
      <LogoBanner/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/desenvolvedores' element={<Desenvolvedores />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  </React.StrictMode>,
)
