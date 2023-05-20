import { Router } from '@router/router';
import React from 'react';
import { Spinner } from '@components/Spinner';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <>
      <Spinner />
      <div className={styles.wrap}>
        <Router />
      </div>
    </>
  );
};
