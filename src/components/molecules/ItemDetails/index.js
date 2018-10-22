import React, { Component } from 'react';
import s from './index.module.css';

class ItemDetails extends Component {
  render() {
    const { cart } = this.props;

    const ItemGroup = cart.map(val => {
      return (
        <div>
          <div className={s.item}>
            <img src={val.img} alt={''} />
            <div className={s.itemDetails}>
              <p className={s.title}>{val.title}</p>
              {val.actualColor && (
                <p className={s.alternateText}>
                  Actual Color: &nbsp;
                  {val.actualColor[0].toUpperCase() + val.actualColor.slice(1)}
                </p>
              )}
              <h3 className={s.price}>${val.price.toFixed(2)}</h3>
              <span className={s.qty}>
                <p>Qty: {val.quantity}</p>
              </span>
            </div>
          </div>
        </div>
      );
    });
    return ItemGroup;
  }
}

export default ItemDetails;
