import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaIterator } from 'redux-saga';
import { postsPageData } from '@store/postsPageData';
import { AllEffect, all } from 'redux-saga/effects';
import { appSlice } from './app';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

const middlewares = [sagaMiddleware];

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appSlice.reducer,
    postsPageData: postsPageData.reducer,
  },
  middleware: [...middlewares],
});

export function* rootSaga(): Generator<AllEffect<SagaIterator<any>>> {
  yield all([postsPageData.watcher()]);
}

sagaMiddleware.run(rootSaga);
