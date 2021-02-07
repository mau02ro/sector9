import React from 'react'

import Header from '../../organims/Header'

import './layout.css'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Layout
