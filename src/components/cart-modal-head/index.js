import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function CartModalHead({ title, buttonCallback = null }) {
  return (
    <div className="modal-head">
      <div className="Head">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="buttons">
          <button onClick={buttonCallback}>Закрыть</button>
        </div>
      </div>
    </div>
  );
}

CartModalHead.propTypes = {
  title: PropTypes.string.isRequired,
  buttonCallback: PropTypes.func,
};

export default React.memo(CartModalHead);
