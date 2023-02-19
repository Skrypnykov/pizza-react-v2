import React from 'react';
import { Categories, Sort, PizzaBlock, Skeleton } from '../components';

const  Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://63f10fb05b7cf4107e2c64b7.mockapi.io/api/v2/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {' '}
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Усі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(12)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
}

export default Home;
