import { RootState } from '@store/types';

export const getPostListRequest = (state: RootState) =>
  state.postsPageData.postListRequest;
