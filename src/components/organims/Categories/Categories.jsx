import React from 'react'

import Category from '../../molecules/Category'

import './categories.css'

const Categories = ({ categories }) => {
  return (
    <div className='categories'>
      {categories.map((category) => (
        <Category key={category.name} {...category} />
      ))}
    </div>
  )
}

export default Categories
