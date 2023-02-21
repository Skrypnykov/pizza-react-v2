import React from 'react';

function Categories({ value, onClickCategory }) {
  const categories = ['Всі', `М'ясні`, 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={value === i ? 'active' : ''}
            key={`${value}_${i}`}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
