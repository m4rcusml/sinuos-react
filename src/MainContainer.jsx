import { BrowserRouter, Routes, Route } from "react-router-dom"
import SinuosBanner from "./components/SinuosBanner"
import Footer from './components/Footer'
import './styles/MainContainer.css'
import Inicio from "./pages/Inicio"
import Desenvolvedores from "./pages/Desenvolvedores"
import Graficos from './pages/Graficos'

const MainContainer = () => {

  return (
    <main>
      <SinuosBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/graficos" element={<Graficos />} />
          <Route path="/desenvolvedores" element={<Desenvolvedores />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  )
}

export default MainContainer