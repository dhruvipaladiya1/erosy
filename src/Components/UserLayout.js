import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const UserLayout = () => {
  return (
    <div>
      <div className='headerDiv'>
        <Header />
      </div>
      <div className='outletDiv'>
        <Outlet />
      </div>
      <div className='footerDiv'>
        <Footer />
      </div>
    </div>
  )
}

export default UserLayout
