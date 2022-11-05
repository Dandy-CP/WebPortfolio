import { createSlice } from '@reduxjs/toolkit';

const fetchDataProjects = createSlice({
  name: 'GET_DATA_PROJECTS',
  initialState: {
    MyProjects: [],
    IsLoading: true,
  },
  reducers: {
    GetProjects: (state, action) => {
      return {
        ...state,
        MyProjects: action.payload,
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

export default fetchDataProjects;
export const { GetProjects, ShowLoading } = fetchDataProjects.actions;
