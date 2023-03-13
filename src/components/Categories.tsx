import React from 'react';
//import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
};

const categories = ['Всі', `М'ясні`, 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті'];

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onClickCategory }) => {

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
});
