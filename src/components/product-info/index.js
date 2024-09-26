import React from 'react';
import './style.css';
import { cn as bem } from '@bem-react/classname';
import { numberFormat } from '../../utils';

function ProductInfo({ product, callbacks }) {
  const cn = bem('ProductInfo');
  // console.log('Callbacks', callbacks);
  return (
    <div className={cn()}>
      <div className={cn('description')}>{product.description}</div>
      <div className={cn('country')}>
        Страна производитель: <span>{product.madeIn?.title || 'Неизвестно'}</span>
      </div>
      <div className={cn('category')}>
        Категория: <span>{product.category?.title || 'Неизвестно'}</span>
      </div>
      <div className={cn('year')}>
        Год выпуска: <span>{product.edition}</span>
      </div>
      <div className={cn('price')}>
        Цена: <span>{numberFormat(product.price)} ₽</span>
      </div>
      <div className={cn('actions')}>
        <button onClick={callbacks.addToBasket}>Добавить</button>
      </div>
    </div>
  );
}

export default React.memo(ProductInfo);
