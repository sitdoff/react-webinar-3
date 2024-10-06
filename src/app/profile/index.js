import React from 'react';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import LocaleSelect from '../../containers/locale-select';
import useSelector from '../../hooks/use-selector';
import useTranslate from '../../hooks/use-translate';
import Navigation from '../../containers/navigation';
import ProfileInfo from '../../components/profile-page';
import useStore from '../../hooks/use-store';
import { useEffect } from 'react';
import ContainerUserBar from '../../containers/container-user-bar';
import useCheckAuth from '../../hooks/use-check-auth';

export default function Profile() {
  const store = useStore();

  const { t } = useTranslate();

  const select = useSelector(state => ({
    token: state.user.token,
    profile: state.profile.profile,
    email: state.profile.email,
  }));

  useCheckAuth(select.token);

  useEffect(() => {
    const fetchData = async () => {
      if (select.token) {
        await store.actions.profile.getProfile(select.token);
      }
    };

    fetchData();
  }, [store, select.token]);

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
