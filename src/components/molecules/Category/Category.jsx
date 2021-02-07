import React from 'react'
import { Link } from 'react-router-dom'

import Image from '../../atoms/Image'

import './category.css'

const Category = ({ link, name, image }) => {
  return (
    <Link to={link} className='category'>
      <h3 className='category_name'>{name}</h3>
      <Image src={image.src} alt={image.alt} maxWidth='101px' />
    </Link>
  )
}

export default Category
