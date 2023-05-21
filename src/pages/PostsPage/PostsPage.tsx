import { FC } from 'react';
import { FeaturePostList } from '@components/FeaturePostList';
import styles from './PostsPage.module.scss';

interface PostsPageProps {}

export const PostsPage: FC<PostsPageProps> = () => {
  return (
    <div className={styles.wrap}>
      <div>PostsPage</div>
      <FeaturePostList userId={null} />
    </div>
  );
};
