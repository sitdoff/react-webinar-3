import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import CartModalHead from '../cart-modal-head';
import CartModalLayout from '../cart-modal-layout';
import CartModalBottom from '../cart-modal-bottom';
import CartModalItemList from '../cart-modal-item-list';

function CartModal({ cart, callbacks }) {
  return (
    <CartModalLayout>
      <CartModalHead title="Корзина" buttonCallback={callbacks.closeModal} />
      <CartModalItemList cart={cart} />
      <CartModalBottom totalPrice={cart.getTotalPrice()} itemCount={cart.getItemCount()} />
    </CartModalLayout>
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
  }),
  callbacks: PropTypes.shape({
    closeModal: PropTypes.func.isRequired,
  }),
};

export default CartModal;
