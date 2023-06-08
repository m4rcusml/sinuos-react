function getResolucao() {
  const resolucao = window.innerWidth
  return resolucao
}

function menuButtonClicado() {
  const menuBar = document.querySelector('#menu')

  menuBar.classList.toggle('aberto')

  if (menuBar.classList.contains('aberto')) {

    if (getResolucao() > 768) {
      document.getElementById('root').style.gridTemplateColumns = '20vw 1fr'
    }

  } else {

    if (getResolucao() > 768) {
      document.getElementById('root').style.gridTemplateColumns = '0 1fr'
    }

  }
}

document.querySelectorAll('#menu-lista .item').forEach(i => {
  i.addEventListener('click', () => {

    document.querySelectorAll('#menu-lista .item').forEach(j => {
      j.classList.remove('selecionado')
    })

    i.classList.add('selecionado')
  })
})

export default function Header() {
  return (
    <>
      <header id="cabecalho">

        <button
          id="menu-button"
          onClick={menuButtonClicado}
        >
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>

        <button>
          <span className="material-symbols-outlined">
            account_circle
          </span>
        </button>

      </header>
    </>
  )
}