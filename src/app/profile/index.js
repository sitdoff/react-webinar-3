import React from 'react';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import LocaleSelect from '../../containers/locale-select';
import useSelector from '../../hooks/use-selector';
import useTranslate from '../../hooks/use-translate';
import Navigation from '../../containers/navigation';
import { useNavigate } from 'react-router-dom';
import ProfileInfo from '../../components/profile-page';
import useStore from '../../hooks/use-store';
import { useEffect } from 'react';
import ContainerUserBar from '../../containers/container-user-bar';

export default function Profile() {
  const store = useStore();

  const navigate = useNavigate();

  const { t } = useTranslate();

  const select = useSelector(state => ({
    token: state.user.token,
    profile: state.user.profile,
    email: state.user.email,
  }));

  useEffect(() => {
    const fetchData = async () => {
      if (select.token) {
        await store.actions.user.getProfile();
      } else {
        navigate('/login');
      }
    };

    fetchData();
  }, []);

  return (
    <PageLayout>
      <ContainerUserBar />
      <Head title={t('title')}>
        <LocaleSelect />
      </Head>
      <Navigation />
      <ProfileInfo profile={select.profile} email={select.email} />
    </PageLayout>
  );
}
