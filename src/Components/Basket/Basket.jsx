import React from 'react'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { delItem, selectBasket } from '../../store/slices/basketSlice/basketSlice'
import { v4 } from 'uuid'


const Basket = () => {
  
  const basket = useSelector(selectBasket)
  // console.log(basket)
  const dispatch = useDispatch()

  const deletItem = (e) => {
    dispatch(delItem(e.target.id))
  }

  return (
    <div>
        {
          basket?.map(phone => (
            <div className="basket_Item" key={v4()}>
              <h1>{phone.model}</h1>
              <img src={phone.img} alt="" />
              <span>{phone.price + '$'}</span>
              <button id={phone.ID} onClick={deletItem}>X</button>
            </div>
          ))
        }
        <Footer/>
    </div>
  )
}

export default Basket