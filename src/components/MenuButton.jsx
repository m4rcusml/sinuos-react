export default function MenuButton(props) {

  const urlAtual = window.location.href

  return (
    <>
      <a href={props.link} className={ urlAtual.endsWith(props.link) ? 'item selecionado' : 'item'}>
        <span className="material-symbols-outlined">
          {props.icone}
        </span>
        {props.texto}
      </a>
    </>
  )
}