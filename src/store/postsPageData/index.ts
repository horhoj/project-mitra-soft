import { actions, reducer } from './slice';
import {
  postsPageDataWatcher as watcher,
  postsPageDataActionCreators as actionCreators,
} from './sagas';

import * as selectors from './selectors';

export const postsPageData = {
  actions,
  reducer,
  watcher,
  actionCreators,
  selectors,
} as const;
