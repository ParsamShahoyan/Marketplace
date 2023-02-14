import React from 'react'
import { SlBasket } from 'react-icons/sl'
import { Link, NavLink } from 'react-router-dom'
import './stayleNav.css'
const Nav = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/'>Products</Link>
        <Link to='/'>Services</Link>
        <Link to='/'>Contact</Link>
        <NavLink to='b' ><SlBasket/></NavLink>
    </nav>
  )
}

export default Nav