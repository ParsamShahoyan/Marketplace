import React from 'react'
import { RiStarSFill } from 'react-icons/ri'
import './styleStars.scss'
import { useState } from 'react'

const Stars = () => {

  const [rate, setRate] = useState(0) 
  const handleClick = (e) => {
    const index = +e.target.dataset.idx
    setRate(index)
  }

  return (
    <div onClick={handleClick} className='container'> 
      {
        new Array(5).fill().map((elem, index) => {
          return <RiStarSFill className={(index < rate) ? 'selected' : 'none'} key={index} data-idx={index + 1}/>
        })
      }
    </div>
  )
}

export default Stars