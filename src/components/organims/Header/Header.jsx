import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Image from '../../atoms/Image'
import Menu from '../../molecules/Menu'

import './header.css'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/logos%2Fsmall.png?alt=media&token=9384109f-8c79-4d4a-a885-bb7c6e4f2827'
          alt='Logo'
          maxWidth='80px'
        />
      </Link>
      <Menu />
    </header>
  )
}

export default Header
