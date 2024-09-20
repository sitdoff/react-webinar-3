import React, { useState, useEffect } from 'react';
import CartInfo from './components/cart-info';
import Head from './components/head';
import PageLayout from './components/page-layout';
import CartModal from './components/cart-modal';
import ItemList from './components/item-list';
import Item from './components/item';
import MainItemList from './components/main-item-list';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const modalCallbacks = {
    openModal: () => setModalOpen(true),
    closeModal: () => setModalOpen(false),
  };

  const [cartState, setCartState] = useState({
    items: store.cart.getItems(),
    itemCount: store.cart.getItemCount(),
    totalPrice: store.cart.getTotalPrice(),
  });

  useEffect(() => {
    const unsubscribe = store.cart.subscribe(() => {
      setCartState({
        items: store.cart.getItems(),
        itemCount: store.cart.getItemCount(),
        totalPrice: store.cart.getTotalPrice(),
      });
    });

    return () => unsubscribe();
  }, [store.cart]);

  return (
    <PageLayout>
      <Head title="Магазин" />
      <CartInfo cartState={cartState} buttonCallback={modalCallbacks.openModal} />
      <MainItemList store={store} />
      {isModalOpen && <CartModal cart={store.cart} callbacks={modalCallbacks} />}
    </PageLayout>
  );
}

export default App;
