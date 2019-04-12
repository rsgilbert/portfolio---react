import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => (

  <header>
    <h1>i AM HERE AS a  portfolio</h1>
    <NavLink to="/">Home | </NavLink>
    <NavLink to="/portfolio">Portfolio | </NavLink>
    <NavLink to="/contacts">Contacts</NavLink>
  </header>
)

export default Header
