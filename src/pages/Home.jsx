/* eslint-disable no-redeclare */

import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { useSelector,useDicpatch } from 'react-redux';
import { setCategoriId } from '../redux/slices/filterSlice';

const Home = ({searchValue}) => {
  const dispatch = useDicpatch ();
  const { categoryId, sort }= useSelector(state => state.filter);


  const { searchValue } = React.useContext(searchValue);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  const [currentPage, setCurrentPage]= React.useState(1);


  const onChangeCategory = (id) => {
    dispatch(setCategoriId(id));
  }
  


  React.useEffect(() => {
  setIsloading(true);
  const sortBy = sort.sortProperty.replase('-', '');
  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';


  fetch(
    `https://637e08319c2635df8f96d2cb.mockapi.io/items?page=${currentPage}${category}&sortBy=${sortBy}&order=${order}${search}`,
  )
  .then((res) => res.json())
  .then((arr) => {
    setItems(arr);
    setIsloading(false);
  });
  window.scrollTo(0, 0);
}, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

  return (
    <div className="container">
    <div className="content_top">
    <Categories value={categoryId} onChangeCategoty={onChangeCategory}/>
    <Sort />
    </div>
    <h2 className='content_title'>Все пиццы</h2>
    <div className="content_items"> 
    {isLoading ? skeletons : pizzas};
    </div>
    <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </div>
    
  );
};

export default Home;