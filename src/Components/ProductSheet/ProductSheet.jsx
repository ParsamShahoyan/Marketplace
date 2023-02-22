import React, { useMemo } from 'react'
import {v4} from 'uuid'
import Products from '../Products/Products'
import { phoneData } from "../../Data/script"
import "./style.scss"
import { selectSearch } from '../../store/slices/searchSlice/searchSlice'
import { useSelector } from 'react-redux'

const ProductSheet = () => {

  const search = useSelector(selectSearch)

  const filteredProducts = useMemo(() => {
    let initialProduct = phoneData.filter(phone => phone.model.includes(search))
      return [
        ...initialProduct.filter(post => post.model.startsWith(search))
      ]
  },[search])
  
  return (
    <article>
      {
        filteredProducts.map(phone => {
        return  <Products {...phone} key={v4()}/>
        })
      }
      
    </article>
  )
}

export default ProductSheet