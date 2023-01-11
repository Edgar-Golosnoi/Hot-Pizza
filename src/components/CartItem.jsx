import React from 'react'

const CartItem = ({ id, title, type, price, count, imageUrl }) => {
  return (
    <div className="cart-item">
      <div className="cart_item-img">
        <img
          className="pizza=block+image"
          src={imageUrl}
          alt="Pizza"
          />
    </div>
    <div className="cart_item-info">
      <h3>{title}</h3>
      <p>{type}, 26см</p>
    </div>
    <div className="cart_item-remove">
      <div className="button button--outline button--circle">
        <svg 
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path 
          d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001"
          fill="#EB5A1E"></path>
          <path 
          d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5"
          fill="#EB5A1E"></path>
          </svg>
      </div>
    </div>
    <div class="cart_item_price">
      <b>{price * count}</b>
    </div>
  )
}

export default CartItem;