import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/slices/basketSlice/basketSlice'
import './styleCounter.scss'

const Cpunter = ({id, count, price}) => {
  const dispatch = useDispatch()

  const inc = () => {
    dispatch(increment(id))
  }
  const dec = () => {
    dispatch(decrement({id, price}))
  }

  return (
    <div className='counter'>
      <button onClick={dec} >-</button>
      <span>{count}</span>
      <button onClick={inc} >+</button>
      <span className='dollar'>{price} $</span>
    </div>
  )
}

export default Cpunter