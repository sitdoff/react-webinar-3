import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function CartInfo({ cartState, buttonCallback }) {
  const plural = require('plural-ru');
  return (
    <div className="CartInfo">
      <span>
        В корзине:{' '}
        {cartState.itemCount ? (
          <b>
            {cartState.itemCount} {plural(cartState.itemCount, 'товар', 'товара', 'товаров')} /{' '}
            {cartState.totalPrice.toLocaleString()} ₽
          </b>
        ) : (
          <b>пусто</b>
        )}
      </span>
      <button onClick={buttonCallback}>Перейти</button>
    </div>
  );
}

CartInfo.propTypes = {
  cartState: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
      }),
    ),
    itemCount: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }),
  buttonCallback: PropTypes.func.isRequired,
};

export default React.memo(CartInfo);
