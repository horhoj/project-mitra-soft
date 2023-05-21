import { SagaIterator } from 'redux-saga';
import { call, takeLatest, put } from 'redux-saga/effects';
import { SagaWorkerAction } from '@store/types';
import { api } from '@api/index';
import { actions } from './slice';

export enum PostsPageDataWorkerType {
  FETCH_POST_LIST = 'postsPageData/fetchPostList',
}

export function* postsPageDataWatcher(): SagaIterator {
  yield takeLatest(
    PostsPageDataWorkerType.FETCH_POST_LIST,
    fetchPostListWorker,
  );
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

export const postsPageDataActionCreators = { fetchPostListWorkerActionCreator };
