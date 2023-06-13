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
import styled from 'styled-components'

import './styles/MainContainer.css'
import './styles/main.css'

const NotFound = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 0;
  color: var(--cor01);
  text-align: center;
`

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
          <Route path="*" element={<NotFound>Página não encontrada! </NotFound>} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  </React.StrictMode>
)
