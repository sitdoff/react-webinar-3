import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { cn as bem } from '@bem-react/classname';

function CartModalItem(props) {
  const cn = bem('CartModalItem');
  const { item, buttonCallback, buttonValue } = props;

  return (
    <div className={cn()}>
      <div className={cn('code')}>{item.code}</div>
      <div className={cn('title')}>{item.title}</div>
      <div className={cn('price')}>{item.price.toLocaleString()} ₽</div>
      <div className={cn('quantity')}>{item.quantity} шт</div>
      <div className={cn('actions')}>
        <button onClick={buttonCallback}>{buttonValue}</button>
      </div>
    </div>
  );
}

CartModalItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
  buttonCallback: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default CartModalItem;
