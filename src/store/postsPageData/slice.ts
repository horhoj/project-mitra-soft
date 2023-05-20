import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  makeRequestSliceStateProperty,
  RequestSliceStateProperty,
} from '@store/helpers';
import { PostItem } from '@interface/Posts';
import { SLICE_NAME } from './types';

interface InitialState {
  postListRequest: RequestSliceStateProperty<PostItem[]>;
}

const initialState: InitialState = {
  postListRequest: makeRequestSliceStateProperty<PostItem[]>(),
};

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setPostListRequest: (
      state,
      action: PayloadAction<Partial<RequestSliceStateProperty<PostItem[]>>>,
    ) => {
      state.postListRequest = { ...state.postListRequest, ...action.payload };
    },
  },
});
