import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ItemList from '../item-list';
import Head from '../head';

function CartModal({ cart, cartState, callbacks }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-head">
          <Head title="Корзина" buttonCallback={callbacks.closeModal} />
        </div>
        {cart.items.length > 0 ? (
          <>
            <ItemList list={cartState.items} cart={cart} isCartModal />
            <div className="total">Итого: {cart.getTotalPrice().toLocaleString()} ₽</div>
          </>
        ) : (
          <div className="empty">Корзина пуста</div>
        )}
      </div>
    </div>
  );
}

CartModal.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
      }),
    ).isRequired,
    getTotalPrice: PropTypes.func.isRequired,
  }),
  callbacks: PropTypes.shape({
    closeModal: PropTypes.func.isRequired,
  }),
};

export default CartModal;
