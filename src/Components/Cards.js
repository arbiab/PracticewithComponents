import React from 'react'

import ConceptImg from './ConceptImg'
import About from './About'
const Cards = ({ items }) => {
  return (
    <>
      <li className="concept">
        <ConceptImg src={items[0].image} alt={items[0].description} />
        <About title={items[0].title} description={items[0].description} />
      </li>
      <li className="concept">
        <ConceptImg src={items[1].image} alt={items[1].description} />
        <About title={items[1].title} description={items[1].description} />
      </li>
      <li className="concept">
        <ConceptImg src={items[2].image} alt={items[2].description} />
        <About title={items[2].title} description={items[2].description} />
      </li>
    </>
  )
}

export default Cards
