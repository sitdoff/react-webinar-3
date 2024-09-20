import PropTypes from 'prop-types';
import React from 'react';
import CartModalItem from '../cart-modal-item';
import ItemList from '../item-list';

function CartModalItemList({ cart }) {
  return cart.items.length ? (
    <ItemList>
      {cart.items.map(item => (
        <CartModalItem
          key={item.code}
          item={item}
          buttonCallback={() => cart.removeItem(item.code)}
          buttonValue="Удалить"
        />
      ))}
    </ItemList>
  ) : (
    <div className="empty">Корзина пуста</div>
  );
}

CartModalItemList.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
      }),
    ).isRequired,
  }),
};

export default CartModalItemList;
