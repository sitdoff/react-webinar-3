import React from 'react';
import './style.css';
import { cn as bem } from '@bem-react/classname';

export default function ProfileInfo(props) {
  const cn = bem('ProfileInfo');
  return (
    <div className={cn()}>
      <div className={cn('title')}>Профиль</div>
      <div className={cn('name')}>
        Имя: <span className={cn('span')}>{props.profile.name}</span>
      </div>
      <div className={cn('phone')}>
        Телефон: <span className={cn('span')}>{props.profile.phone}</span>
      </div>
      <div className={cn('email')}>
        email: <span className={cn('span')}>{props.email}</span>
      </div>
    </div>
  );
}
