import { BrowserRouter, Routes, Route } from "react-router-dom"
import SinuosBanner from "./components/SinuosBanner"
import Footer from './components/Footer'
import './MainContainer.css'
import Inicio from "./pages/Inicio"

const MainContainer = () => {

  return (
    <main>
      <SinuosBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  )
}

export default MainContainer