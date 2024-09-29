import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat } from '../../utils';
import './style.css';
import { Link } from 'react-router-dom';
import { getProductLink } from '../../utils';

function Item({ item, onAdd, basicPath = '/products' }) {
  const cn = bem('Item');

  const callbacks = {
    addCallback: e => onAdd(item._id),
  };

  return (
    <div className={cn()}>
      {/*<div className={cn('code')}>{item._id}</div>*/}
      <div className={cn('title')}>
        <Link to={getProductLink(item._id, basicPath)}>{item.title}</Link>
      </div>
      <div className={cn('actions')}>
        <div className={cn('price')}>{numberFormat(item.price)} ₽</div>
        <button onClick={callbacks.addCallback}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func,
};

Item.defaultProps = {
  onAdd: () => { },
};

export default memo(Item);
