import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { cn as bem } from '@bem-react/classname';

function CartModalLayout({ children }) {
  const cn = bem('modal');
  return (
    <div className={cn()}>
      <div className={cn('content')}>{children}</div>
    </div>
  );
}

CartModalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartModalLayout;
