
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';


function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector(state => state.filter.sort)

  const [open, setOpen]= React.useState(false);
  const list = [
  { name: ' популярности', sortProperty: 'rating'},
  { name: ' популярности', sortProperty: '-rating'},
  { name: ' цене', sortProperty: 'price'},
  { name: ' цене', sortProperty: '-price'},
  { name: ' алфавиту', sortProperty: 'title'},
  { name: ' алфавиту', sortProperty: '-title'}
];

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
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
          <span onClick={() => setOpen(!open)}>{sort.name}</span>
        </div>
        {open && (
        <div className="sort_popup">
          <ul>
          {list.map((obj, i) => (
            // eslint-disable-next-line no-undef
            <li key={i}
            onClick={() => onClickListItem(obj)}
            className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
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