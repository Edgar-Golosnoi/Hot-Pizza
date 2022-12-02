/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react'


function Sort({value, onChangeSort}) {
  const [open, setOpen]= React.useState(false);
  const list = [
  { name: ' популярности', sortProperty: 'rating'},
  { name: ' популярности', sortProperty: '-rating'},
  { name: ' цене', sortProperty: 'price'},
  { name: ' цене', sortProperty: '-price'},
  { name: ' алфавиту', sortProperty: 'title'},
  { name: ' алфавиту', sortProperty: '-title'}
];

  const onClickListItem = (el) => {
    onChangeSort(el);
    setOpen(false);
  };



  return (
    <div className="sort">
      <div className="sort_label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          </svg>
          <b> Сортировкапа по:</b>
          <span onClick={() => setOpen(!open)}>{value.name}</span>
        </div>
        {open && (
        <div className="sort_popup">
          <ul>
          {list.map((obj, i) => (
            // eslint-disable-next-line no-undef
            <li key={i}
            onClick={() => onClickListItem(obj)}
            className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
            {obj.name}
            </li>
          ))}
          </ul>
        </div>
      )}
    </div>
  )
  
}

export default Sort;