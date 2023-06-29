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
  width: 100%;
  height: 100%;
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

const NotFound = ({ fullscreen = false }) => {
  return (
    <NotFoundStyled
      style={{
        width: fullscreen && '100vw',
        height: fullscreen && '100vh'
      }}
    >
      <h1>Página não encontrada!</h1>
      <Link to={fullscreen ? 'home' : ''}>Voltar para página inicial</Link>
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
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<App />}>
          <Route path="/home" element={<Inicio />} />
          <Route path="/home/graficos" element={<Graficos />} />
          <Route path="/home/desenvolvedores" element={<Desenvolvedores />} />
          {/* <Route path="/home/*" element={<NotFound />} /> */}
        </Route>

        {/* <Route path="/*" element={<NotFound fullscreen={true} />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)
