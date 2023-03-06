import React from 'react';
import { Link } from 'react-router-dom';

import imgCartEmpty from '../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>
          Кошик порожній <span>😕</span>
        </h2>
        <p>
          Найімовірніше, ви ще не замовляли піцу.
          <br />
          Щоб замовити піцу, перейди на головну сторінку.
        </p>
        <img src={imgCartEmpty} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Повернутися</span>
        </Link>
      </div>
    </div>
  );
};
