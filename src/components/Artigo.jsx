export default function Artigo(props) {
  return (
    <>
      <article className="article">
        <div className="article-imagem">
          <img src={props.imgUrl} alt={props.imgAlt ? props.imgAlt : ''} />
        </div>
        <div className="article-info">
          <a href={props.tituloLink ? props.tituloLink : ''} className="titulo">{props.titulo}</a>
          <div className="texto">
            <p>{props.texto1}</p>
            <p>{props.texto2}</p>
            <p>{props.texto3}</p>
            
            {props.children}
            
          </div>
        </div>
      </article>
    </>
  )
}