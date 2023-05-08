import React from 'react'
import Dashboard from './Dashboard/dashBoard'
import Sidebar from './Sidebar/sideBar'
import Activity from './Activity/activity'
import Product from './Product/product'
import Schedule from './Schedule/schedule'
import Header from './Header/header'

const Index = () => {
  return (
    <div>
      <Header/>
      <Dashboard/>
      <Sidebar />
      <Activity />
      <Product />
      <Schedule />
    </div>
  )
}

export default Index
