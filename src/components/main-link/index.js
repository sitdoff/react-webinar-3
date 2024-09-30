import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function MainLink() {
  return (
    <div className="main-link">
      <Link to="/">Главная</Link>
    </div>
  );
}

export default MainLink;
