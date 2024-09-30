import { memo, useCallback, useEffect, useState } from 'react';
import Item from '../../components/item';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import List from '../../components/list';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import Pagination from '../../components/pagination';
import MainLink from '../../components/main-link';
import './style.css';

function Main() {
  const store = useStore();

  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector(state => ({
    list: state.catalog.list,
    currentPage: state.catalog.currentPage,
    limit: state.catalog.limit,
    totalGoodsCount: state.catalog.totalGoodsCount,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  };

  const renders = {
    item: useCallback(
      item => {
        return <Item item={item} onAdd={callbacks.addToBasket} />;
      },
      [callbacks.addToBasket],
    ),
  };

  const setPage = useCallback(
    page => {
      store.actions.catalog.setPage(page);
      // setCurrentPage(page);
    },
    [store],
  );

  return (
    <PageLayout>
      <Head title="Магазин" />
      <div className="under-head">
        <MainLink />
        <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
      </div>
      <List list={select.list} renderItem={renders.item} />
      <Pagination
        limit={select.limit}
        totalGoodsCount={select.totalGoodsCount}
        currentPage={select.currentPage}
        setPage={setPage}
      />
    </PageLayout>
  );
}

export default memo(Main);
