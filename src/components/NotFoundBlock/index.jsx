import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Нічого не знайдено</h1>
      <p className={styles.description}>На жаль, ця сторінка відсутня в нашій піцерії</p>
      <br />
      <span>😕</span>
    </div>
  );
};

export default NotFoundBlock;
