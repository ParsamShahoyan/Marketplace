import React from 'react'
import {v4} from 'uuid'
import Products from '../Products/Products'
import { phoneData } from "../../Data/script"

const ProductSheet = () => {
  return (
    <article>
      {
        phoneData.map(phone => {
        return  <Products {...phone} key={v4()}/>

        })
      }
      
    </article>
  )
}

export default ProductSheet