import React from 'react';
import { SearchContext } from '../App';
import { Categories, Sort, PizzaBlock, Skeleton, Pagination } from '../components';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'популярністю', sortProperty: 'rating' });
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.sortProperty === 'rating' ? 'desc' : 'asc';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://63f10fb05b7cf4107e2c64b7.mockapi.io/api/v2/items?page=${currentPage}&limit=3&${category}&sortBy=${sortType.sortProperty}&order=${order}${search}`,
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
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort sortBy={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Усі піци</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
