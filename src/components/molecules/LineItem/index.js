import React from 'react';
import styles from './index.module.css';

const LineItem = props => {
  const { title, price, decrement, altTitle, large } = props;

  if (large) {
    return (
      <div className={styles.lineitem}>
        <div className={styles.lineitem__description}>
          <span className={styles.lineitem__title_large}>{title}</span>
          {altTitle && <p className={styles.lineitem__altTitle}>{altTitle}</p>}
        </div>
        <p className={styles.lineitem__price_large} decrement={decrement}>
          {decrement ? (
            <span className={styles.decrement}>
              <b>
                -$
                {(price * -1).toFixed(2)}
              </b>
            </span>
          ) : (
            <span>
              <b>${price.toFixed(2)}</b>
            </span>
          )}
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.lineitem}>
        <div className={styles.lineitem__description}>
          <span className={styles.lineitem__title}>{title}</span>
          {altTitle && <p className={styles.lineitem__altTitle}>{altTitle}</p>}
        </div>
        <p className={styles.lineitem__price} decrement={decrement}>
          {decrement ? (
            <span className={styles.decrement}>
              <b>
                -$
                {(price * -1).toFixed(2)}
              </b>
            </span>
          ) : (
            <span>
              <b>${price.toFixed(2)}</b>
            </span>
          )}
        </p>
      </div>
    );
  }
};

export default LineItem;
