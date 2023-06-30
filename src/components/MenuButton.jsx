import React from 'react'
import { Link } from "react-router-dom"

const MenuButton = ({ link, icon, text }) => {
  
  function fecharMenu() {
    // document.querySelector('#menu').classList.remove('aberto')
  }
  
  return (
    <Link 
      to={link} 
      className={`item`}
      onClick={fecharMenu}
    >
      <span className="material-symbols-outlined">
        {icon}
      </span>
      {text}
    </Link>
  )
}

export default MenuButton