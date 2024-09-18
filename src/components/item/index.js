import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Item(props) {
  const { item, buttonCallback, buttonValue, isCartModal = false } = props;

  return (
    <div className={isCartModal ? 'CartModalItem' : 'Item'}>
      <div className="Item-code">{item.code}</div>
      <div className="Item-title">{item.title}</div>
      <div className="Item-price">{item.price.toLocaleString()} ₽</div>
      {/* Если это модальное окно корзины, показываем количество товара */}
      {isCartModal && <div className="Item-quantity">{item.quantity} шт</div>}
      <div className="Item-actions">
        <button onClick={buttonCallback}>{buttonValue}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
  buttonCallback: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
  isCartModal: PropTypes.bool,
};

export default Item;
