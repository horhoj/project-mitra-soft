import { FC } from 'react';
import { FeaturePostList } from '@components/FeaturePostList';
import styles from './PostsPage.module.scss';

interface PostsPageProps {}

export const PostsPage: FC<PostsPageProps> = () => {
  return (
    <div className={styles.wrap}>
      <h2>Список всех постов</h2>
      <FeaturePostList userId={null} />
    </div>
  );
};
