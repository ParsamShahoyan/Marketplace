import React from 'react'
import './styleCounter.scss'

const Cpunter = ({count}) => {
  return (
    <div className='counter'>
      <button>+</button>
      <span>{count}</span>
      <button>-</button>
    </div>
  )
}

export default Cpunter