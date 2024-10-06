import React from 'react';
import UserBar from '../../components/user-bar';
import { useNavigate } from 'react-router-dom';
import useSelector from '../../hooks/use-selector';
import { useCallback } from 'react';
import useStore from '../../hooks/use-store';

export default function ContainerUserBar() {
  const store = useStore();
  const select = useSelector(state => ({
    username: state.user.username,
    token: state.user.token,
  }));

  const navigate = useNavigate();
  const navigateLogin = () => navigate('/login');

  const callbacks = {
    onClickCallback: useCallback(async () => {
      if (!select.token) {
        navigateLogin();
      } else {
        await store.actions.user.resetState();
        navigateLogin();
      }
    }, [store]),
  };

  return (
    <UserBar
      profileLink={'/profile'}
      username={select.username}
      onClickCallback={callbacks.onClickCallback}
      buttonText={select.token ? 'Выход' : 'Вход'}
    />
  );
}
