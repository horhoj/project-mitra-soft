import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  makeRequestSliceStateProperty,
  RequestSliceStateProperty,
} from '@store/helpers';
import { Post } from '@interface/Posts';
import { Comment } from '@interface/Comment';
import { SLICE_NAME } from './types';

interface InitialState {
  postListRequest: RequestSliceStateProperty<Post[]>;
  postCommentRequest: RequestSliceStateProperty<Record<number, Comment[]>>;
}

const initialState: InitialState = {
  postListRequest: makeRequestSliceStateProperty<Post[]>(),
  postCommentRequest:
    makeRequestSliceStateProperty<Record<number, Comment[]>>(),
};

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    reset: () => initialState,
    setPostListRequest: (
      state,
      action: PayloadAction<Partial<RequestSliceStateProperty<Post[]>>>,
    ) => {
      state.postListRequest = { ...state.postListRequest, ...action.payload };
    },
    setCommentListRequest: (
      state,
      action: PayloadAction<
        Partial<RequestSliceStateProperty<Record<number, Comment[]>>>
      >,
    ) => {
      state.postCommentRequest = {
        ...state.postCommentRequest,
        ...action.payload,
        data: { ...state.postCommentRequest.data, ...action.payload.data },
      };
    },
    clearPostCommentList: (
      state,
      action: PayloadAction<{ postId: number }>,
    ) => {
      // console.log(action.payload);
      if (state.postCommentRequest.data) {
        delete state.postCommentRequest.data[action.payload.postId];
      }
    },
  },
});
