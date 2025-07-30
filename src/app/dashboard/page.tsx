
'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import styles from './Dashboard.module.scss';

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  // This effect handles the protected route logic.
  useEffect(() => {
    if (!loading && !user) {
      router.replace('/auth');
    }
  }, [user, loading, router]);

  // Show a loading state while the auth status is being checked.
  if (loading || !user) {
    return <div className={styles.loader}>در حال بارگذاری...</div>;
  }

  // Render the dashboard once the user is confirmed.
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.welcomeCard}>
        <img
          src={user.picture.large}
          alt={`Portrait of ${user.name.first}`}
          className={styles.avatar}
        />
        <h1>خوش آمدید، {user.name.first} {user.name.last}!</h1>
        <p>شما با موفقیت به داشبورد خود وارد شدید.</p>
        <p className={styles.email}>{user.email}</p>
        <button onClick={logout} className={styles.logoutButton}>
          خروج
        </button>
      </div>
    </div>
  );
}
