import MenuButton from './components/MenuButton.jsx'

function reportarBug() {
  alert('Reportando bug...')
}

export default function Menu() {
  return (
    <>
      <nav id="menu">
        <div id="menu-lista">

          <MenuButton texto='Início' link='/' icone='home'></MenuButton>
          <MenuButton texto='Desenvolvedores' link='/desenvolvedores' icone='groups'></MenuButton>

        </div>

        <div id="reportar-erro">
          <button 
            id="btn-reportar-erro" 
            className="item"
            onClick={reportarBug}
          >
            <span className="material-symbols-outlined">
              bug_report
            </span>
            Reportar erro
          </button>
        </div>
      </nav>
    </>
  )
}