import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { postListData } from '@store/postListData';
import { PostItem } from '@components/FeaturePostList/PostItem';
import styles from './FeaturePostList.module.scss';

interface FeaturePostListProps {
  userId: number | null;
}

export const FeaturePostList: FC<FeaturePostListProps> = ({ userId }) => {
  const dispatch = useAppDispatch();
  const postListRequest = useAppSelector(
    postListData.selectors.getPostListRequest,
  );

  useEffect(() => {
    dispatch(
      postListData.actionCreators.fetchPostListWorkerActionCreator(userId),
    );
    return () => {
      dispatch(postListData.actions.reset());
    };
  }, []);

  return (
    <div className={styles.wrap}>
      {postListRequest.data !== null &&
        postListRequest.data.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
    </div>
  );
};
