import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import './style.css';

function ItemList({ list, cart, isCartModal = false }) {
  // Сортируем список по code
  const sortedItems = isCartModal ? [...list].sort((a, b) => a.code - b.code) : list;

  return (
    <div className="List">
      {sortedItems.map(item => (
        <div key={item.code} className="List-item">
          <Item
            item={item}
            buttonCallback={
              isCartModal
                ? () => cart.removeItem(item.code) // В корзине удаляем товар
                : () => cart.addItem(item) // В обычном списке добавляем товар
            }
            buttonValue={isCartModal ? 'Удалить' : 'Добавить'}
            isCartModal={isCartModal}
          />
        </div>
      ))}
    </div>
  );
}

ItemList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number,
    }),
  ).isRequired,
  cart: PropTypes.shape({
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
  }).isRequired,
  isCartModal: PropTypes.bool,
};

export default React.memo(ItemList);
