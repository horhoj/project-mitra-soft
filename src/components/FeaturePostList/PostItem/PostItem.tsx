import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import avatarImg from '@assets/avatar.png';
import { Button } from 'react-bootstrap';
import { Post } from '@interface/Posts';
import { PostCommentList } from '@components/FeaturePostList/PostCommentList';
import styles from './PostItem.module.scss';

interface PostItemProps {
  post: Post;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const [isCommentListShow, setIsCommentListShow] = useState(false);

  return (
    <Card>
      <Link to={`/xxxxx${post.userId}`} className={styles.link}>
        <Card.Img src={avatarImg} className={styles.avatar} />
      </Link>
      <Card.Body>
        <Card.Text>(postId={post.id})</Card.Text>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>

        <Card.Text>
          <Button onClick={() => setIsCommentListShow((prev) => !prev)}>
            {isCommentListShow ? 'Скрыть комментарии' : 'Показать комментарии'}
          </Button>
        </Card.Text>
        {isCommentListShow && <PostCommentList postId={post.id} />}
      </Card.Body>
    </Card>
  );
};
