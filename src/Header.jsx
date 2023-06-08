import './Header.css'

const Header = () => {

  function getResolucao() {
    const resolucao = window.innerWidth
    return resolucao
  }

  function abrirFecharMenu() {
    document.querySelector('#menu').classList.toggle('aberto')
    document.querySelector('#menu').classList.toggle('fechado')
    if (document.querySelector('#menu').classList.contains('aberto')) {
      if (getResolucao() > 768) {
        document.querySelector('#root').style.gridTemplateColumns = '20vw 1fr'
      }
    } else {
      if (getResolucao() > 768) {
        document.querySelector('#root').style.gridTemplateColumns = '0 1fr'
      }
    }
  }

  return (
    <header id="cabecalho">

      <button id="menu-button" onClick={abrirFecharMenu}>
        <span className="material-symbols-outlined">
          menu
        </span>
      </button>

      <button id="account-button" className="clicado">
        <span className="material-symbols-outlined">
          account_circle
        </span>
      </button>

    </header>
  )
}

export default Header