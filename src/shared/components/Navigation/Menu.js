import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink exact to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/auth'>Auth</NavLink>
        </li>
        <li>
          <NavLink to='/profiles'>Profiles</NavLink>
        </li>
        <li>
          <NavLink to='/posts'>Posts</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Menu
