import React from 'react';

function Categories() {
  const [activeItems, setActiveItems] = React.useState(0);

  const categories = ['Усі', `М'ясні`, 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті'];

  const onClickItems = (index) => {
    setActiveItems(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => onClickItems(index)}
            className={activeItems === index ? 'active' : ''}
            key={`${value}_${index}`}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
