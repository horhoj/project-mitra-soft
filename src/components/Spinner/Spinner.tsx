import React, { FC } from 'react';
import { Portal } from '@components/Portal';
import { useAppSelector } from '@store/hooks';
import { data } from '@store/data';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  const postsPageDataIsLoading = useAppSelector(data.selectors.isLoading);

  const isLoading = postsPageDataIsLoading;

  return isLoading ? (
    <Portal>
      <div className={styles.Spinner} />
    </Portal>
  ) : null;
};
