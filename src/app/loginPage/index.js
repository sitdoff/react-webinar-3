import React from 'react';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import LocaleSelect from '../../containers/locale-select';
import useStore from '../../hooks/use-store';
import useTranslate from '../../hooks/use-translate';
import LoginForm from '../../components/login-form';
import Navigation from '../../containers/navigation';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import ContainerUserBar from '../../containers/container-user-bar';

export default function Login() {
  const store = useStore();

  const { t } = useTranslate();

  const navigate = useNavigate();
  const navigateMain = () => navigate('/profile');

  const callbacks = {
    onSubmit: useCallback(async userData => {
      await store.actions.user.getToken(userData);
      navigateMain();
      console.log('User data after login', store.actions.user.getState());
    }, []),
  };

  return (
    <PageLayout>
      <ContainerUserBar />
      <Head title={t('title')}>
        <LocaleSelect />
      </Head>
      <Navigation />
      <LoginForm onSubmit={callbacks.onSubmit} />
    </PageLayout>
  );
}
