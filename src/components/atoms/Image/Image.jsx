import React from 'react'

import './image.css'

const Image = ({ src, alt, maxWidth }) => {
  return (
    <picture className='image' style={{ maxWidth }}>
      <img src={src} alt={alt} />
    </picture>
  )
}

export default Image
