import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectBasket } from '../../store/slices/basketSlice'

const Basket = () => {
  const basket = useSelector(selectBasket)
  console.log(basket)
  return (
    <div>
        <h1>basket</h1>
        <h1>basket</h1>
        <h1>basket</h1>
        <h1>basket</h1>
        <h1>basket</h1>
        <h1>basket</h1>
        <h1>basket</h1>
    </div>
  )
}

export default Basket