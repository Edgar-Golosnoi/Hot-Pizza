import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../..//App';
import styles from './Serch.module.scss';



const Search = () => {
  const [value, setValue ] = React.useState('');
  const { searchValue,setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const updateSearhcValue =  React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearhcValue(event.target.value);
  }


  return  <div className={styles.root}>
  <svg className={styles.icon}
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg">
  <title/><g id="search">
  <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"/></g></svg>
  <input
  ref={inputRef}
  value={searchValue}
  onChange={onChangeInput}
  className={styles.input}
  placeholder="поиск пиццы...">
  </input>

  {searchValue && (
  <svg onClick={onClickClear}
  className={styles.clearIcon}
  viewBox="0 0 32 32" 
  xmlns="http://www.w3.org/2000/svg">
  <circle
  cx="14"
  cy="14"
  fill="none"
  r="9"
  stroke="#000000"
  strokeLinecap='round'
  strokeLinejoin='round'
  strokeMiterlimit='10'
  strokeWidth="2"
  />
  <line
  fill="none"
  id="XMLID_44_"
  stroke="#000000"
  strokeLinecap='round'
  strokeLinejoin='round'
  strokeMiterlimit='10'
  strokeWidth="2"
  x="27"
  x2="20.336"
  y1="27"
  y2="20.336"
  />
  </svg>
  )}
  </div>
}

export default Search;