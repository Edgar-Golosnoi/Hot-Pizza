/* eslint-disable no-undef */
/* eslint-disable no-redeclare */

import React from 'react';
import qs from 'qs';

import { useSelector,useDicpatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Categories, Sort, PizzaBlock, Skeleton, Pagination } from '../Components';
import { setCategoriId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import axios from 'axios';
import { SearchContext } from '../App'

const Home = ({searchValue}) => {
  const navigate = useNavigate();
  const dispatch = useDicpatch ();
  const isSearch = React.useRef(false);

  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage }= useSelector(state => state.filter);


  const { searchValue } = React.useContext(searchValue);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);


  const onChangeCategory = (id) => {
    dispatch(setCategoriId(id));
  };

  const onChangePage = number => {
    dispatch(setCurrentPage(number));
  };

  const fetchPizzas = () => {
    setIsloading(true);
    const sortBy = sort.sortProperty.replase('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
  
  axios
      .get(`https://637e08319c2635df8f96d2cb.mockapi.io/items?page=${currentPage}${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((response) => {
      setItems(response.data);
      setIsloading(false);
      });
  };

  React.useEffects(() => {
    if (isMounted.current) {
    const queryString = qs.stringify({
    sortProperty: sort.sortProperty,
    categoryId ,
    currentPage,
  });
  navigate(`?${queryString}`);
  }
  isMounted.current = true;
},[categoryId, sort.sortProperty, currentPage]);



  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find(obj => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);
  

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if(!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
    
  );
};

export default Home;