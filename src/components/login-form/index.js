import React from 'react';
import './style.css';
import { cn as bem } from '@bem-react/classname';
import { useState } from 'react';

export default function LoginForm(props) {
  const [loginData, setLoginData] = useState({ login: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await props.onSubmit(loginData);
    } catch (error) {
      setError(error.message);
    }
    // console.log(JSON.stringify(loginData));
  };

  const cn = bem('LoginForm');

  return (
    <form className={cn()} onSubmit={handleSubmit}>
      <div className={cn('form')}>
        <div className={cn('title')}>Вход</div>
        <div className={cn('label')}>Логин</div>
        <div className={cn('input')}>
          <input type="text" name="login" value={loginData.login} onChange={handleInputChange} />
        </div>
        <div className={cn('label')}>Пароль</div>
        <div className={cn('input')}>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* <div className={cn('error')}>{error}</div> */}
      {error && <div className={cn('error')}>{error}</div>}
      <div className={cn('button')}>
        <button type="submit">Войти</button>
      </div>
    </form>
  );
}
