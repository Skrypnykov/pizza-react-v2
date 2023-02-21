import React from 'react';
import { Categories, Sort, PizzaBlock, Skeleton } from '../components';

const Home = () => {
  const [items, setItems] = React.useState([]);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'популярністю', sortProperty: 'rating' });

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.sortProperty === 'rating' ? 'desc' : 'asc';

    fetch(
      `https://63f10fb05b7cf4107e2c64b7.mockapi.io/api/v2/items?${category}&sortBy=${sortType.sortProperty}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort sortBy={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Усі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(12)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
