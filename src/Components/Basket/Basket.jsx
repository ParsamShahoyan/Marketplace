import React from 'react'
import Footer from '../Footer/Footer'
import Counter from '../Counter/Cpunter'
import { useDispatch, useSelector } from 'react-redux'
import { delItem, selectBasket } from '../../store/slices/basketSlice/basketSlice'
import { v4 } from 'uuid'
import './styleBasket.scss'

const Basket = () => {
  
  const basket = useSelector(selectBasket)
  const dispatch = useDispatch()
  // console.log(basket)

  const deletItem = (e) => {
    dispatch(delItem(e.target.id))
  }

  return (
    <div className='basket_container'>
        {
          basket?.map(phone => (
            <div className="basket_Item" key={v4()}>
              <img src={phone.img} alt="" />
              <h3>{phone.model}</h3>
              <span>{phone.price + '$'}</span>
              <Counter count={phone.count}/>
              <button className='x' id={phone.ID} onClick={deletItem}>X</button>
            </div>
          ))
        }
        <Footer/>
    </div>
  )
}

export default Basket