import React from 'react'
import { Link } from "react-router-dom"

const MenuButton = ({ link, icon, text }) => {
  
  return (
    <Link 
      to={link} 
      className={`item`}
    >
      <span className="material-symbols-outlined">
        {icon}
      </span>
      {text}
    </Link>
  )
}

export default MenuButton