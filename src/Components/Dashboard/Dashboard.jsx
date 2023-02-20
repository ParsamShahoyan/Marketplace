import React from 'react'
import Footer from '../Footer/Footer'
import Header  from '../Header/Header'
import ProductSheet  from '../ProductSheet/ProductSheet'
import Sidebar  from '../Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <>
        <Header/>
        <Sidebar/>
        <ProductSheet/>
        <Footer/>
    </>
  )
}

export default Dashboard