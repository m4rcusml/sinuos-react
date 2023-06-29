import { Outlet } from 'react-router-dom'
import Header from './Header'
import Menu from './Menu'
import Footer from './components/Footer'
import SinuosBanner from './components/SinuosBanner'

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

export default App