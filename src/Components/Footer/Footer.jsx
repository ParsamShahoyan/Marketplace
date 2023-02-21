import React from 'react'
import { BiArrowToTop } from 'react-icons/bi'

const Footer = () => {
  function scrollToTop (){
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <footer>Footer{
      <BiArrowToTop style={{marginLeft: '400px', fontSize: '40px', cursor: 'pointer'}} onClick={scrollToTop}/>
      }</footer>
  )
}

export default Footer