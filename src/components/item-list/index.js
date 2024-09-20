import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ItemList({ children }) {
  return <div className="List">{children}</div>;
}

ItemList.propTypes = {
  children: PropTypes.node,
};

export default React.memo(ItemList);
