import React from 'react'
import './Header.css'
const Header = ({ src, alt }) => {
  return (
    <header>
      <img src={src} alt={alt} />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  )
}

export default Header
