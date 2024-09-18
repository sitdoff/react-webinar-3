import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Head({ title, buttonCallback = null }) {
  return (
    <div className="Head">
      <div className="title">
        <h1>{title}</h1>
      </div>
      {buttonCallback && (
        <div className="buttons">
          <button onClick={buttonCallback}>Закрыть</button>
        </div>
      )}
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  buttonCallback: PropTypes.func,
};

export default React.memo(Head);
