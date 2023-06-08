import Artigo from './components/Artigo'
import './Inicio.css'

export default function Inicio() {
  return (
    <>
      <section id="articles-lista">

        {/* Posso fazer um for each ao inves de repetir essa tag toda vez */}
        <Artigo
          imgUrl=""
          imgAlt=""
          titulo="A problemática da água"
          tituloLink=""
          texto1="A geomoforlogia fluvial do estado do Amazonas é marcada por afluentes, rios, córregos e igarapés perenes e
                sinuosos, que, apesar do seu grau de importância tanto para a flora e fauna da região,
                são constantemente alvo de despejo de inúmeras formas de poluição química e sólida."
        />

        <Artigo
          imgUrl=""
          imgAlt=""
          titulo="O que pretendemos fazer"
          tituloLink=""
          texto1="Baseado nisso, o projeto SINUOS surgiu com a proposta de colaborar com os órgãos governamentais,
              CONAMA e o projeto Prosamim, responsáveis pelo monitoramento e regulação do IQA (Índice de Qualidade da
              Água) dos corpos hídricos da Rede Metropolitana de Manaus."
          texto2="Através de um sistema autônomo capaz de mapear os igarapés em processos de revitalização,
              disponibilizando dados de pH, temperatura, TDS e localização por meio de um banco de dados seguro e
              confiável."
        />

        <Artigo
          imgUrl=""
          imgAlt=""
          titulo="Quem forma nossa equipe"
          tituloLink="/desenvolvedores"
        >
          <ul>
            <li>Mecatrônca:</li>
            <ul>
              <li>Manuela</li>
              <li>Márcia</li>
              <li>Rafaella</li>
            </ul>
            <li>Informática:</li>
            <ul>
              <li>Carlos Daniel</li>
              <li>Davi Almeida</li>
              <li>Marcus Felipe</li>
            </ul>
          </ul>
        </Artigo>

      </section>

      <section id="mapa">
        <h2 className="titulo">Disposição dos rios da cidade</h2>

        <div id="mapa-container">
          <iframe src="https://www.google.com/maps/d/embed?mid=1u4hhyYTja7YUsPgXzH65P6WP3RPYayQ&hl=pt-BR&ehbc=2E312F"
            width="640" height="480"></iframe>
        </div>
      </section>
    </>
  )
}