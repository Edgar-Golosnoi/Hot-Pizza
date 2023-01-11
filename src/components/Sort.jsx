/* eslint-disable no-undef */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';


function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector(state => state.filter.sort);
  const sortRef = React.useRef();

  const [open, setOpen]= React.useState(false);

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
    }


  React.useEffect(() => {
    const handleClickOutside = (event) => {
      event => {
        if (!event.path.includes(sortRef.current)) {
          setOpen(false);
      }
    }
    
  ducument.body.addEventListener('click', handleClickOutside);

  return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);
}


  return (
    <div  ref={setSort} className="sort">
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