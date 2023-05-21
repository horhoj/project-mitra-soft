import { useAppSelector } from '@store/hooks';
import { postListData } from '@store/postListData';
import { useEffect } from 'react';

export const useErrorView = () => {
  const postListRequest = useAppSelector(
    postListData.selectors.getPostListRequest,
  );
  const userRequest = useAppSelector(postListData.selectors.getUserRequest);

  const postCommentRequest = useAppSelector(
    postListData.selectors.getPostCommentRequest,
  );

  useEffect(() => {
    if (postListRequest.error) {
      alert(
        'Ошибка получения постов: ' +
          JSON.stringify(postListRequest.error, null, 2),
      );
    }
  }, [postListRequest.error]);

  useEffect(() => {
    if (postListRequest.error) {
      alert(
        'Ошибка получения сведений о пользователе: ' +
          JSON.stringify(userRequest.error, null, 2),
      );
    }
  }, [userRequest.error]);

  useEffect(() => {
    if (postCommentRequest.error) {
      alert(
        'Ошибка получения комментариев: ' +
          JSON.stringify(postCommentRequest.error, null, 2),
      );
    }
  }, [postCommentRequest.error]);
};
