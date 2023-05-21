import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { postListData } from '@store/postListData';
import Card from 'react-bootstrap/esm/Card';
import styles from './PostCommentList.module.scss';

interface PostCommentListProps {
  postId: number;
}

export const PostCommentList: FC<PostCommentListProps> = ({ postId }) => {
  const dispatch = useAppDispatch();

  const postCommentList = useAppSelector(
    postListData.selectors.getPostCommentList(postId),
  );

  useEffect(() => {
    dispatch(
      postListData.actionCreators.fetchCommentListWorkerActionCreator(postId),
    );

    return () => {
      dispatch(postListData.actions.clearPostCommentList({ postId }));
    };
  }, []);

  return (
    <div className={styles.wrap}>
      {postCommentList &&
        postCommentList.map((comment) => (
          <Card key={comment.id}>
            <Card.Body>
              <Card.Link>{comment.email}</Card.Link>
              <Card.Text>{comment.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};
