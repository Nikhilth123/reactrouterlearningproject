import React from 'react'
import Header from './components/headers/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footers/Footers'

function Layout() {
  return (
    <div>
        <Header></Header>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout