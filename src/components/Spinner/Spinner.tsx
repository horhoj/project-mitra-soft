import React, { FC } from 'react';
import { Portal } from '@components/Portal';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  const chatsSliceIsLoading = false;

  return chatsSliceIsLoading ? (
    <Portal>
      <div className={styles.Spinner} />
    </Portal>
  ) : null;
};
