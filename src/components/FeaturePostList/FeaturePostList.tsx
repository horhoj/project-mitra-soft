import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { postListData } from '@store/postListData';
import Card from 'react-bootstrap/Card';
import avatarImg from '@assets/avatar.png';
import { Link } from 'react-router-dom';
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
          <Card key={post.id}>
            <Link to={`/xxxxx${post.userId}`} className={styles.link}>
              <Card.Img src={avatarImg} className={styles.avatar} />
            </Link>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};
