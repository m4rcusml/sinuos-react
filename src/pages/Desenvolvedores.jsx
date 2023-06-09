import CardDesenvolvedor from '../components/CardDesenvolvedor'
import Carlos from '../assets/imgs/desenvolvedores/Carlos.jpeg'
import Davi from '../assets/imgs/desenvolvedores/Davi.jpeg'
import Emerson from '../assets/imgs/desenvolvedores/Emerson.jpeg'
import Jonhatan from '../assets/imgs/desenvolvedores/Jonhatan.jpeg'
import Manuela from '../assets/imgs/desenvolvedores/Manuela.jpeg'
import Marcia from '../assets/imgs/desenvolvedores/Marcia.jpeg'
import Marcus from '../assets/imgs/desenvolvedores/Marcus.jpg'
import Rafaella from '../assets/imgs/desenvolvedores/Rafaella.jpeg'
import Sandiego from '../assets/imgs/desenvolvedores/Sandiego.jpeg'
import Navegacao from '../components/Navegacao'
import './styles/Desenvolvedores.css'

const Desenvolvedores = () => {
  return (
    <section id="desenvolvedores">
      <h2 className="titulo">Desenvolvedores</h2>
      <div className="lista">
        <div>
          <CardDesenvolvedor
            nome="Manuela Pimentel"
            turma="M3A 2023"
            imagemUrl={Manuela}
          />
          <CardDesenvolvedor
            nome="Rafaella Castro"
            turma="M3B 2023"
            imagemUrl={Rafaella}
          />
          <CardDesenvolvedor
            nome="Márcia Emanuele"
            turma="M3B 2023"
            imagemUrl={Marcia}
          />
        </div>

        <div>
          <CardDesenvolvedor
            nome="Marcus Felipe"
            turma="I2A 2023"
            cargo="Programador / Designer"
            imagemUrl={Marcus}
          />
          <CardDesenvolvedor
            nome="Carlos Daniel"
            turma="I2A 2023"
            cargo="Analista / Programador"
            imagemUrl={Carlos}
          />
          <CardDesenvolvedor
            nome="Davi Almeida"
            turma="I2A 2023"
            cargo="Designer / Programador"
            imagemUrl={Davi}
          />
        </div>

        <div>
          <CardDesenvolvedor
            nome="Emerson Leão"
            turma="Orientador"
            cargo="Professor"
            imagemUrl={Emerson}
          />
          <CardDesenvolvedor
            nome="Jonhatan Eduardo"
            turma="Coorientador"
            cargo="Professor"
            imagemUrl={Jonhatan}
          />
          <CardDesenvolvedor
            nome="Sandiego de Moraes"
            turma="Orientador"
            cargo="Professor"
            imagemUrl={Sandiego}
          />
        </div>
      </div>
      <Navegacao.Baixo />
    </section>
  )
}

export default Desenvolvedores