import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from './Header'
import Menu from './Menu'
import Inicio from './pages/Inicio'
import Graficos from './pages/Graficos'
import Desenvolvedores from './pages/Desenvolvedores'
import Footer from './components/Footer'
import SinuosBanner from './components/SinuosBanner'

import './styles/MainContainer.css'
import './styles/main.css'

/* Renderização da aplicação */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Menu />
      <main>
        <SinuosBanner />
        <Routes>
          <Route path="" element={<Inicio />} />
          <Route path="graficos" element={<Graficos />} />
          <Route path="desenvolvedores" element={<Desenvolvedores />} />
          <Route path="*" element={<h1>Página não encontrada! </h1>} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  </React.StrictMode>
)
