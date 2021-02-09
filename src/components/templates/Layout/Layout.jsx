import React, { useState } from 'react'

import Header from '../../organims/Header'
import Onboarding from '../Onboarding'

import './layout.css'

const Layout = ({ children }) => {
  const [visited, setVisited] = useState(
    localStorage.getItem('visited') || false
  )

  const handleVisited = () => {
    let status = localStorage.getItem('visited') || false
    localStorage.setItem('visited', !status)
    setVisited(localStorage.getItem('visited'))
  }

  return (
    <div className='layout'>
      <Header />
      <div>{children}</div>
      {!visited && <Onboarding setVisited={handleVisited} />}
    </div>
  )
}

export default Layout
