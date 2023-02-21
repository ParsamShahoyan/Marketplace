// import "./App.css"
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home/Home"
import Uniq from "./Components/Uniq/Uniq"
import Basket from "./Components/Basket/Basket"
import Dashboard from "./Components/Dashboard/Dashboard"
import Footer from './Components/Footer/Footer'

const App = () => {
  
  return (
    <>
    <div className="main">
      
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='basket' element={<Basket />} />
          <Route path='uniq/:id' element={<Uniq />} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App