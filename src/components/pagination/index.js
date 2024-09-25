import React from 'react';
import { memo } from 'react';
import './style.css';

function Pagination({ limit, totalGoodsCount, currentPage, setPage }) {
  const totalPages = Math.ceil(totalGoodsCount / limit);
  console.log('Current page', currentPage);
  console.log('Total', totalGoodsCount);
  console.log('totalPages', totalPages);

  function generatePages() {
    const pages = [];
    const delta = 1; // Количество кнопок вокруг активной
    const range = [];

    pages.push(
      <span className={currentPage === 1 ? 'active' : ''} onClick={() => setPage(1)} key={1}>
        1
      </span>,
    );

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
      if (currentPage === 1) {
        range.push(i + 1);
      }
    }
    console.log('Range array', range);

    if (currentPage - delta > 2) {
      pages.push(
        <span className="dots" key="dots-left">
          ...
        </span>,
      );
    }

    range.forEach(page => {
      pages.push(
        <span
          className={currentPage === page ? 'active' : ''}
          onClick={() => setPage(page)}
          key={page}
        >
          {page}
        </span>,
      );
    });

    if (currentPage + delta < totalPages - 1) {
      pages.push(
        <span className="dots" key="dots-right">
          ...
        </span>,
      );
    }

    pages.push(
      <span
        className={currentPage === totalPages ? 'active' : ''}
        onClick={() => setPage(totalPages)}
        key={totalPages}
      >
        {totalPages}
      </span>,
    );

    return pages;
  }

  return <div className="pagination">{generatePages()}</div>;
}
export default memo(Pagination);
