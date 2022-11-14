import { createSlice } from '@reduxjs/toolkit';

const fetchBlogContent = createSlice({
  name: 'GET_BLOG_CONTENT',
  initialState: {
    BlogContent: [],
    IsLoading: true,
  },
  reducers: {
    GetBlogContent: (state, action) => {
      return {
        ...state,
        BlogContent: action.payload,
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

export default fetchBlogContent;
export const { GetBlogContent, ShowLoading } = fetchBlogContent.actions;
