import { Router } from '@router/router';
import React from 'react';
import { Spinner } from '@components/Spinner';
import { Header } from '@components/Header';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <>
      <Spinner />
      <Header />
      <div className={styles.wrap}>
        <Router />
      </div>
    </>
  );
};
