import React from 'react';
import './style.css';
import { cn as bem } from '@bem-react/classname';
import { Link } from 'react-router-dom';

export default function UserBar(props) {
  const cn = bem('UserBar');
  return (
    <div className={cn()}>
      <Link to={props.profileLink}>
        {props.username ? <div className={cn('username')}>{props.username}</div> : null}
      </Link>
      <button onClick={() => props.onClickCallback()}>{props.buttonText}</button>
    </div>
  );
}
