'use client';

import { StartPageMain, DashboardMain } from '@/components';
import { checkLoginStatus } from '@/service/checkLoginStatus';
import { useEffect, useState } from 'react';

const Home = () => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLoginStatus = async () => {
      const loggedIn = await checkLoginStatus();
      setIsLoggedIn(loggedIn);
      setLoading(false);
    };

    fetchLoginStatus();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (isLoggedIn) {
    return (
      <DashboardMain />
    );
  }

  return (
    <StartPageMain />
  );
};

export default Home;