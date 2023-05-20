import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { postsPageData } from '@store/postsPageData';
import styles from './PostsPage.module.scss';

interface PostsPageProps {}

export const PostsPage: FC<PostsPageProps> = () => {
  const dispatch = useAppDispatch();
  const postListRequest = useAppSelector(
    postsPageData.selectors.getPostListRequest,
  );

  useEffect(() => {
    dispatch(postsPageData.actionCreators.fetchPostListWorkerActionCreator());
  }, []);

  return (
    <div className={styles.wrap}>
      <div>PostsPage</div>
      <pre>{JSON.stringify(postListRequest.isLoading, null, 2)}</pre>
      <pre>{JSON.stringify(postListRequest.error, null, 2)}</pre>
      <pre>{JSON.stringify(postListRequest.data, null, 2)}</pre>
    </div>
  );
};
