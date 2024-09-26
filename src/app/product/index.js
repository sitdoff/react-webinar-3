import React from 'react';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import ProductInfo from '../../components/product-info';
import { useParams } from 'react-router-dom';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import { useCallback, useEffect } from 'react';

function Product() {
  const { id } = useParams();
  // console.log('Product ID', id);
  const store = useStore();

  useEffect(() => {
    store.actions.product.load(id);
  }, [id]);

  const select = useSelector(state => ({
    product: state.product.productData,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));
  // console.log('Product', select.product);

  const callbacks = {
    addToBasket: useCallback(() => store.actions.basket.addToBasket(id), [store]),
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    closeModalBasket: useCallback(() => store.actions.modals.close(), [store]),
  };

  // console.log('ID', id);
  return (
    <PageLayout>
      <Head title={select.product.title} />
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
      <ProductInfo product={select.product} callbacks={callbacks} />
    </PageLayout>
  );
}

export default Product;
