import React from 'react';
import { SearchContext } from '../App';
import { Categories, Sort, PizzaBlock, Skeleton, Pagination } from '../components';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

const Home = () => {
  const dispatch = useDispatch();
  //const categoryId = useSelector((state) => state.filter.categoryId);
  //const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;

  const [items, setItems] = React.useState([]);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType === 'rating' ? 'desc' : 'asc';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://63f10fb05b7cf4107e2c64b7.mockapi.io/api/v2/items?page=${currentPage}&limit=3&${category}&sortBy=${sortType}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(12)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Усі піци</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
