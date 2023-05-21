import { SagaIterator } from 'redux-saga';
import { call, takeLatest, put } from 'redux-saga/effects';
import { SagaWorkerAction } from '@store/types';
import { api } from '@api/index';
import { actions } from './slice';

export enum PostsPageDataWorkerType {
  FETCH_POST_LIST = 'postListData/fetchPostList',
  FETCH_COMMENT_LIST = 'postListData/fetchCommentList',
  FETCH_USER = 'postListData/fetchUser',
}

export function* postsPageDataWatcher(): SagaIterator {
  yield takeLatest(
    PostsPageDataWorkerType.FETCH_POST_LIST,
    fetchPostListWorker,
  );
  yield takeLatest(
    PostsPageDataWorkerType.FETCH_COMMENT_LIST,
    fetchCommentListWorker,
  );
  yield takeLatest(PostsPageDataWorkerType.FETCH_USER, fetchUserWorker);
}

type FetchPostListWorkerAction = SagaWorkerAction<
  PostsPageDataWorkerType.FETCH_POST_LIST,
  { userId: number | null }
>;

const fetchPostListWorkerActionCreator = (
  userId: number | null,
): FetchPostListWorkerAction => ({
  type: PostsPageDataWorkerType.FETCH_POST_LIST,
  payload: { userId },
});

export function* fetchPostListWorker(
  action: FetchPostListWorkerAction,
): SagaIterator {
  try {
    yield put(actions.setPostListRequest({ isLoading: true }));
    const response: Awaited<ReturnType<typeof api.posts.fetchPostList>> =
      yield call(api.posts.fetchPostList, action.payload.userId);
    yield put(actions.setPostListRequest({ data: response }));
  } catch (e) {
    yield put(actions.setPostListRequest({ error: (e as Error).message }));
  } finally {
    yield put(actions.setPostListRequest({ isLoading: false }));
  }
}

type FetchCommentListWorkerAction = SagaWorkerAction<
  PostsPageDataWorkerType.FETCH_COMMENT_LIST,
  { postId: number }
>;

const fetchCommentListWorkerActionCreator = (
  postId: number,
): FetchCommentListWorkerAction => ({
  type: PostsPageDataWorkerType.FETCH_COMMENT_LIST,
  payload: { postId },
});

export function* fetchCommentListWorker(action: FetchCommentListWorkerAction) {
  try {
    // yield call(console.log, action.payload);
    yield put(actions.setCommentListRequest({ isLoading: true }));
    const response: Awaited<ReturnType<typeof api.comments.fetchCommentList>> =
      yield call(api.comments.fetchCommentList, action.payload.postId);
    yield put(
      actions.setCommentListRequest({
        data: { [action.payload.postId]: response },
      }),
    );
  } catch (e) {
    yield put(actions.setCommentListRequest({ error: (e as Error).message }));
  } finally {
    yield put(actions.setCommentListRequest({ isLoading: false }));
  }
}

type FetchUserWorkerAction = SagaWorkerAction<
  PostsPageDataWorkerType.FETCH_USER,
  { userId: number }
>;

const fetchUserWorkerActionCreator = (
  userId: number,
): FetchUserWorkerAction => ({
  type: PostsPageDataWorkerType.FETCH_USER,
  payload: { userId },
});

export function* fetchUserWorker(action: FetchUserWorkerAction) {
  // yield call(console.log, action.payload);
  try {
    yield put(actions.setUserData({ isLoading: true }));

    const response: Awaited<ReturnType<typeof api.users.fetchUser>> =
      yield call(api.users.fetchUser, action.payload.userId);
    yield put(actions.setUserData({ data: response }));
  } catch (e) {
    yield put(actions.setUserData({ error: (e as Error).message }));
  } finally {
    yield put(actions.setUserData({ isLoading: false }));
  }
}

export const postsPageDataActionCreators = {
  fetchPostListWorkerActionCreator,
  fetchCommentListWorkerActionCreator,
  fetchUserWorkerActionCreator,
};
