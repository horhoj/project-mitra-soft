import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaIterator } from 'redux-saga';
import { postListData } from '@store/postListData';
import { AllEffect, all } from 'redux-saga/effects';
import { appSlice } from './app';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

const middlewares = [sagaMiddleware];

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appSlice.reducer,
    postsPageData: postListData.reducer,
  },
  middleware: [...middlewares],
});

export function* rootSaga(): Generator<AllEffect<SagaIterator<any>>> {
  yield all([postListData.watcher()]);
}

sagaMiddleware.run(rootSaga);
