import React from 'react'
import img1 from './IMAGES/IMGheader/1.jpg'
import img2 from './IMAGES/IMGheader/2.jpg'
import img3 from './IMAGES/IMGheader/3.png'
import img4 from './IMAGES/IMGheader/4.jpg'
import img5 from './IMAGES/IMGheader/5.jpg'
import img6 from './IMAGES/IMGheader/6.png'
import img7 from './IMAGES/IMGheader/7.jpg'
import img8 from './IMAGES/IMGheader/8.jpg'

import "./headerStayle.scss"
const Header = () => {
  return (
    <header>
        <div className="galery">
          <h1>A Galery</h1>
          <h1>Of The</h1>
          <h1>Foto</h1>
          <p>Lorem ipsum dolor sit</p>
        </div>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
    </header>
  )
}

export default Header