import { createSlice } from '@reduxjs/toolkit';

const fetchLatestPost = createSlice({
  name: 'GET_LATEST_POST',
  initialState: {
    LatestPostBlog: [],
    IsLoading: true,
  },
  reducers: {
    GetLatestPost: (state, action) => {
      return {
        ...state,
        LatestPostBlog: action.payload,
      };
    },
    ShowLoading: (state, action) => {
      return {
        ...state,
        IsLoading: action.payload,
      };
    },
  },
});

export default fetchLatestPost;
export const { GetLatestPost, ShowLoading } = fetchLatestPost.actions;
