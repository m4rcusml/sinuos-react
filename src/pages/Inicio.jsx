import Navegacao from '../components/Navegacao'
import './Inicio.css'

const Inicio = () => {
  return (
    <>
      <Navegacao.Cima />

      <section id="articles-lista">
        <article className="article">
          <div className="article-imagem">
            <img src="" alt="" />
          </div>
          <div className="article-info">
            <a href="#" className="titulo">A problemática da água</a>
            <div className="texto">
              <p>
                A geomoforlogia fluvial do estado do Amazonas é marcada por afluentes, rios, córregos e igarapés perenes e
                sinuosos,
                que, apesar do seu grau de importância tanto para a flora e fauna da região,
                são constantemente alvo de despejo de inúmeras formas de poluição química e sólida.
              </p>
            </div>
          </div>
        </article>

        <article className="article">
          <div className="article-imagem">
            <img src="" alt="" />
          </div>
          <div className="article-info">
            <a href="#" className="titulo">O que o este projeto pretende fazer</a>
            <div className="texto">
              <p>
                Baseado nisso, o projeto SINUOS surgiu com a proposta de colaborar com os órgãos governamentais,
                CONAMA e o projeto Prosamim, responsáveis pelo monitoramento e regulação do IQA (Índice de Qualidade da
                Água)
                dos corpos hídricos da Rede Metropolitana de Manaus.
              </p>
              <p>
                Através de um sistema autônomo capaz de mapear os igarapés em processos de revitalização,
                disponibilizando dados de pH, temperatura, TDS e localização por meio de um banco de dados seguro e
                confiável.
              </p>
            </div>
          </div>
        </article>

        <article className="article">
          <div className="article-imagem">
            <img src="" alt="" />
          </div>
          <div className="article-info">
            <a href="desenvolvedores.html" className="titulo">Quem forma nossa equipe</a>
            <div className="texto">
              <ul>
                <li>Mecatrônca:</li>
                <ul>
                  <li>Manuela, Márcia e Rafaella</li>
                </ul>
                <li>Informática:</li>
                <ul>
                  <li>Carlos Daniel, Davi Almeida e Marcus Felipe</li>
                </ul>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section id="mapa">
        <h2 className="titulo">Disposição dos rios da cidade</h2>

        <div id="mapa-container">
          <iframe src="https://linkquebrado.com"
            width="640" height="480">
          </iframe>
        </div>
      </section >

      <Navegacao.Baixo />
    </>
  )
}

export default Inicio