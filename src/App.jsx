import "./App.css"
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home/Home"
import Uniq from "./Components/Uniq/Uniq"
import Basket from "./Components/Basket/Basket"
import Dashboard from "./Components/Dashboard/Dashboard"

const App = () => {
  
  return (
    <>
    <div className="main">
      
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='basket' element={<Basket />} />
        <Route path='uniq/:id' element={<Uniq />} />

        {/* <Route path='/' element={<Header />} />
        <Route path='sidebar' elemenst={<Sidebar />} />
        <Route path='/' element={<ProductSheet />} />
        <Route path='/' element={<Footer />} /> */}
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App