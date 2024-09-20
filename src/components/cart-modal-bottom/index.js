import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { cn as bem } from '@bem-react/classname';

function CartModalBottom({ totalPrice, itemCount }) {
  const cn = bem('CartModalBottom');
  return itemCount ? (
    <div className={cn()}>
      <div className={cn('total')}>
        <div className={cn('label')}>Итого</div>
        <div className={cn('price')}>{totalPrice.toLocaleString()} ₽</div>
      </div>
    </div>
  ) : (
    '' /* Тут пустая строка, которая возвращается в случае false */
  );
}

CartModalBottom.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default React.memo(CartModalBottom);
