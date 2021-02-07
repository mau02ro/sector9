import React from 'react'
import { Link } from 'react-router-dom'

import Image from '../../atoms/Image'

import './category.css'

const Category = ({ name, image, alt, link }) => {
  return (
    <Link to={link} className='category'>
      <h3 className='category_name'>{name}</h3>
      <Image src={image} alt={alt} maxWidth='101px' />
    </Link>
  )
}

export default Category
