import React from 'react'
import './styles/Navegacao.css'

const Cima = () => {
  return (
    <div className="botoes-topo">
      <button type="button" id="mostrar-mapa">
        <a href="#mapa">
          <span className="material-symbols-outlined">
            map
          </span>
        </a>
      </button>
    </div>
  )
}

const Baixo = () => {

  function irParaTopo() {
    document.querySelector('main').scroll(0, 0)
  }

  return (
    <div className="botoes-fim">
      <button type="button" onClick={irParaTopo}>
        <span className="material-symbols-outlined">
          arrow_upward
        </span>
      </button>
    </div>
  )
}

export default { Cima, Baixo }