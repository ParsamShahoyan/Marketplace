import React from 'react'
import { useSelector } from 'react-redux'
import { SlBasket } from 'react-icons/sl'
import { Link, NavLink } from 'react-router-dom'
import './stayleNav.css'
import { selectBasket } from '../../store/slices/basketSlice/basketSlice'
const Nav = () => {

  const basket = useSelector(selectBasket)

  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/'>Products</Link>
        <Link to='/'>Services</Link>
        <Link to='/'>Contact</Link>
        <Link className='boo' to='basket' >
          <SlBasket/>
          <span>{basket.length}</span>
        </Link>
    </nav>
  )
}

export default Nav