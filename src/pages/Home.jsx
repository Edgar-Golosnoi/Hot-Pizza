/* eslint-disable no-undef */
import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';


const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  const [categoryId, setCategoryId]= React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  


  React.useEffect(() => {
  setIsloading(true);
  const sortBy = sortType.sortProperty.replase('-', '');
  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const category = categoryId > 0 ? `category=${categoryId}` : ''

  fetch(
    `https://637e08319c2635df8f96d2cb.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
  )
  .then((res) => res.json())
  .then((arr) => {
    setItems(arr);
    setIsloading(false);
  });
  window.scrollTo(0, 0);
}, [categoryId, sortType]);

  return (
    <div className="container">
    <div className="content_top">
    <Categories value={categoryId} onChangeCategoty={(i)  => setCategoryId(i)}/>
    <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
    </div>
    <h2 className='content_title'>Все пиццы</h2>
    <div className="content_items"> 
    {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
  : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)};
    </div>
    </div>
  );
};

export default Home;