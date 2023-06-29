import React from 'react'
import MenuButton from './components/MenuButton'
import './styles/Menu.css'

const Menu = () => {

  function reportarErro() {
    alert('Reportando erro...')
  }

  return (
    <nav id="menu" className="fechado">
      <div id="menu-lista">
        <MenuButton
          link=""
          icon="home"
          text="Início"
        />
        <MenuButton
          link="graficos"
          icon="show_chart"
          text="Gráficos"
        />
        <MenuButton
          link="desenvolvedores"
          icon="groups"
          text="Desenvolvedores"
        />
      </div>

      <div id="reportar-erro">
        <button
          id="btn-reportar-erro"
          className="item"
          onClick={reportarErro}
        >
          <span className="material-symbols-outlined">
            bug_report
          </span>
          Reportar erro
        </button>
      </div>
    </nav>
  )
}

export default Menu