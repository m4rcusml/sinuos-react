const MenuButton = ({ link, icon, text }) => {

  const isSelected = window.location.href.endsWith(link)

  return (
    <a href={link} className={`item ${isSelected && 'selecionado'}`}>
      <span className="material-symbols-outlined">
        {icon}
      </span>
      {text}
    </a>
  )
}

export default MenuButton