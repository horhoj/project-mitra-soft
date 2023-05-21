import React, { FC } from 'react';
import { Portal } from '@components/Portal';
import { useAppSelector } from '@store/hooks';
import { postListData } from '@store/postListData';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  const postsPageDataIsLoading = useAppSelector(
    postListData.selectors.isLoading,
  );

  const isLoading = postsPageDataIsLoading;

  return isLoading ? (
    <Portal>
      <div className={styles.Spinner} />
    </Portal>
  ) : null;
};
