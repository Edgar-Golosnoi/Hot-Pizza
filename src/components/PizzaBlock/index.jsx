/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

const typeNames = ['тонкое', 'традиционное'];

function PizzaBlock({ id, title, price, imageUrl, sizes, types, rating }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id))
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: activeSize,
    };
    dispatch(addItem(item));
  };

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
        <button oncClick={onClickAdd} className="button button--outline button--add" >
        <svg 
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            </svg>
        </button>
        <span>Добавить</span>
        {addedCount > 0 && <i>{addedCount}</i>}
      </div>
    </div>
  )
}

export default PizzaBlock;