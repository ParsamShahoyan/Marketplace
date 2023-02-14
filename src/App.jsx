import "./App.css"
import React from 'react'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home/Home"
import Uniq from "./Components/Uniq/Uniq"
import Basket from "./Components/Basket/Basket"

const App = () => {
  
  return (
    <>
    <div className="main">
    <Nav/>
      <Routes>
        <Route index  element={<Home/>}/>
        <Route path='uniq/:id' element={<Uniq />} />
        <Route path='b' element={<Basket />} />
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App