import React from 'react';
import { Header, Categories, Sort, PizzaBlock } from './components';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title="Мексиканская" price={150} />
              <PizzaBlock title="Пеперони" price={130} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
