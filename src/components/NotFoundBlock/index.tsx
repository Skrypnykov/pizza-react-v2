import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>Нічого не знайдено</h2>
      <p className={styles.description}>На жаль, ця сторінка відсутня в нашій піцерії</p>
      <br />
      <span>😕</span>
    </div>
  );
};
