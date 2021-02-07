import React from 'react'

import Heading from '../../components/atoms/Heading'
import Paragraph from '../../components/atoms/Paragraph'
import Categories from '../../components/organims/Categories'

const data = [
  {
    link: '#',
    name: 'Tablas',
    image: {
      alt: 'Tablas',
      src:
        'https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fboards.png?alt=media&token=4828f1de-8571-45ed-b133-695f56357cfa',
    },
  },
  {
    link: '#',
    name: 'Bases',
    image: {
      alt: 'Bases',
      src:
        'https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fbases.png?alt=media&token=e54a685e-8d58-48bb-b8d5-b80d03269409',
    },
  },
  {
    link: '#',
    name: 'Llantas',
    image: {
      alt: 'Llantas',
      src:
        'https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Ftires.png?alt=media&token=e75eb480-9f5a-403f-b88e-f4455e0c838b',
    },
  },
]

const Home = () => {
  return (
    <section>
      <Heading>Home</Heading>
      <Paragraph>
        Arma la patineta que siempre has soñado, personaliza eligiendo cada una
        de sus partes y pasea por la vida en tu sector 9.
      </Paragraph>

      <Categories categories={data} />
    </section>
  )
}

export default Home
