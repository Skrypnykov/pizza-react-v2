import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://63f10fb05b7cf4107e2c64b7.mockapi.io/api/v2/items/' + id,
        );
        setPizza(data);
      } catch (error) {
        console.log('Помилка загрузки!');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container">
        <p>Завантаження...</p>
      </div>
    );
  }
  return (
    <div className="container">
      <img className="pizza-block__image" src={pizza.imageUrl} />
      <h4 className="pizza-block__title">{pizza.name}</h4>
      <div className="pizza-block__price">{pizza.price} ₴</div>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
