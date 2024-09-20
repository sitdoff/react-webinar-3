import React from 'react';
import ItemList from 'item-list';
import Item from 'item';

function MainItemList({ store }) {
  return (
    <ItemList>
      {store.state.list.map(item => (
        <div key={item.code} className="List-item">
          <Item
            item={item}
            buttonCallback={() => store.cart.addItem(item)}
            buttonValue={'Добавить'}
          />
        </div>
      ))}
      ;
    </ItemList>
  );
}

export default React.memo(MainItemList);
