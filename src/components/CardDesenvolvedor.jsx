const CardDesenvolvedor = ({nome, turma, cargo, imagemUrl}) => {
  return (
    <div className="item">
      <img src={imagemUrl} className="imagem" />
      <div className="info">
        <h3 className="nome">{nome}</h3>
        <p className="cargo">
          {turma != "" && turma} 
          {cargo != "" && <br /> }
          {cargo != "" && cargo }
        </p>
      </div>
    </div>
  )
}

export default CardDesenvolvedor