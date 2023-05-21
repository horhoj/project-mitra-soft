import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  makeRequestSliceStateProperty,
  RequestSliceStateProperty,
} from '@store/helpers';
import { Post } from '@interface/Posts';
import { SLICE_NAME } from './types';

interface InitialState {
  postListRequest: RequestSliceStateProperty<Post[]>;
}

const initialState: InitialState = {
  postListRequest: makeRequestSliceStateProperty<Post[]>(),
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
  },
});
