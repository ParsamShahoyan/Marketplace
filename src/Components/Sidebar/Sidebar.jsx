import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts, resetSearch, searchIphone, searchXiaomi, toggleText } from '../../store/slices/searchSlice/searchSlice'
import './styleSidbar.scss'

const Sidebar = () => {

  const inputRef = useRef('')
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(toggleText(inputRef.current.value))
  }

  useEffect(() => {
    dispatch(resetSearch())
  }, [])

  const filterIphone = () => {
    dispatch(searchIphone('Iphone'))
  }

  const filterXiaomi = () => {
    dispatch(searchXiaomi('Xiaomi'))
  }

  const resetProducts = () => {
    dispatch(allProducts(''))
  }

  const searchSams = () => {
    dispatch(allProducts('Samsung'))
  }

  return (
    <aside>Search
        <input onChange={handleChange} ref={inputRef} type="text" />
        <div className='click_search' onClick={filterIphone}>Iphone</div>
        <div className='click_search' onClick={searchSams}>Samsung</div>
        <div className='click_search' onClick={filterXiaomi}>Xiaomi</div>
        <div className='click_search' onClick={resetProducts}>All</div>
    </aside>
  )
}

export default Sidebar