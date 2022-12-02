/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React, { useState } from "react";

function PizzaBlock({title, price, imageUrl, sizes, types, category}) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ['тонкое', 'традиционное'];

  return (
    <div className="pizza_block">
    <img 
    className="pizza_block_image"
    src={imageUrl}
    alt ="Pizza"/>
    <h4 className="pizza_block_title">{title}</h4>
    <div className="pizza_block_selector">
    <ul>
      {types.map((typeId) => (
        <li key={typeId} onClick={() => setActiveType(typeId)} className={activeType === typeId ? 'active' : '' }>{typeNames[typeId]}</li>
      ))}
    </ul>
    <ul>
    {sizes.map((size, i) => (
      <li key={size} onClick={() => setActiveSize(i)} className={activeSize === i ?  'active' : ''}>{size} см.</li>
  ))}
    </ul>
    </div>
        <div className="pizza_block_bottom">
        <div className="pizza_block_price">от {price} Р</div>
        <button className="button button--outline button--add" >
        <svg 
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            </svg>
        </button>
        <span>Добавить</span>
        <i>0</i>
      </div>
    </div>
  )
}

export default PizzaBlock;