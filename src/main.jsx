import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

import Header from './Header'
import Menu from './Menu'
import Inicio from './pages/Inicio'
import Graficos from './pages/Graficos'
import Desenvolvedores from './pages/Desenvolvedores'
import Login from './pages/Login'
import Footer from './components/Footer'
import SinuosBanner from './components/SinuosBanner'
import styled from 'styled-components'

import './styles/MainContainer.css'
import './styles/main.css'

const NotFoundStyled = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 2em 0;
  color: var(--cor01);
  text-align: center;
`

const NotFound = () => {
  return (
    <NotFoundStyled>
      <h1>Página não encontrada!</h1>
      <Link to="">Voltar para página inicial</Link>
    </NotFoundStyled>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <SinuosBanner />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<Inicio />} />
          <Route path="graficos" element={<Graficos />} />
          <Route path="desenvolvedores" element={<Desenvolvedores />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path='login' element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
