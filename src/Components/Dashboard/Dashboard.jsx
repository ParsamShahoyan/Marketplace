import React from 'react'
import Footer from '../Footer/Footer'
import Header  from '../Header/Header'
import ProductSheet  from '../ProductSheet/ProductSheet'
import Sidebar  from '../Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <>
        <Header/>
        <div style={{display: 'flex', margin:' 30px 5%'}} className="di">
          <Sidebar/>
          <ProductSheet/>
        </div>
        <Footer/>
    </>
  )
}

export default Dashboard