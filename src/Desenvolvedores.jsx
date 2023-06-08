import Manuela from './assets/imgs/desenvolvedores/Manuela.jpeg'
import Rafaella from './assets/imgs/desenvolvedores/Rafaella.jpeg'
import Marcia from './assets/imgs/desenvolvedores/Marcia.jpeg'
import Carlos from './assets/imgs/desenvolvedores/Carlos.jpeg'
import Marcus from './assets/imgs/desenvolvedores/Marcus.jpg'
import Davi from './assets/imgs/desenvolvedores/Davi.jpeg'
import Jonhatan from './assets/imgs/desenvolvedores/Jonhatan.jpeg'
import Emerson from './assets/imgs/desenvolvedores/Emerson.jpeg'
import Sandiego from './assets/imgs/desenvolvedores/Sandiego.jpeg'

import './Desenvolvedores.css'

export default function Desenvolvedores() {
  return (
    <>
      <section id="desenvolvedores">

        <h2 className="titulo">Desenvolvedores</h2>

        <div className="lista">

          <div>
            <div className="item">
              <img src={Manuela} className="imagem" />
                <div className="info">
                  <h3 className="nome">Manuela Pimentel</h3>
                  <p className="cargo">M3A</p>
                </div>
            </div>
            <div className="item">
              <img src={Rafaella} className="imagem" />
                <div className="info">
                  <h3 className="nome">Rafaella Castro</h3>
                  <p className="cargo">M3B</p>
                </div>
            </div>
            <div className="item">
              <img src={Marcia} className="imagem" />
                <div className="info">
                  <h3 className="nome">Márcia Emanuele</h3>
                  <p className="cargo">M3B</p>
                </div>
            </div>
          </div>

          <div>
            <div className="item">
              <img src={Carlos} className="imagem" />
                <div className="info">
                  <h3 className="nome">Carlos Daniel</h3>
                  <p className="cargo">Analista / Programador <br /> I2A</p>
                </div>
            </div>
            <div className="item">
              <img src={Marcus} className="imagem" />
                <div className="info">
                  <h3 className="nome">Marcus Felipe</h3>
                  <p className="cargo">Programador / Designer <br /> I2A</p>
                </div>
            </div>
            <div className="item">
              <img src={Davi} className="imagem" />
                <div className="info">
                  <h3 className="nome">Davi Almeida</h3>
                  <p className="cargo">Designer / Programador <br /> I2A</p>
                </div>
            </div>
          </div>

          <div>
            <div className="item">
              <img src={Jonhatan} className="imagem" />
                <div className="info">
                  <h3 className="nome">Jonhatan Eduardo</h3>
                  <p className="cargo">Coorientador <br />Professor</p>
                </div>
            </div>
            <div className="item">
              <img src={Emerson} className="imagem" />
                <div className="info">
                  <h3 className="nome">Emerson Leão</h3>
                  <p className="cargo">Orientador <br />Professor</p>
                </div>
            </div>
            <div className="item">
              <img src={Sandiego} className="imagem" />
                <div className="info">
                  <h3 className="nome">Sandiego de Moraes</h3>
                  <p className="cargo">Orientador <br /> Professor</p>
                </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}