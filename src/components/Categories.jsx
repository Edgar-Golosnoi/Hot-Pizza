/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

function Categories({ value, onChangeCategoty }) {
  const categories = [ 'Все', 'Мясные' , 'Вегетарианские', 'Гриль', 'Острые',  'Закрытые' ]

    return (
  <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
        <li key={i} onClick={() => onChangeCategoty(i)} className={value === i ? 'active' : '' }>
        {categoryName}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Categories;