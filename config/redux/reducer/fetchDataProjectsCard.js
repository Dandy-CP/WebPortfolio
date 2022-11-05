import { createSlice } from '@reduxjs/toolkit';

const fetchDataProjectsCard = createSlice({
  name: 'GET_DATA_PROJECTS_CARD',
  initialState: {
    CardProjects: [],
    IsLoading: true,
  },
  reducers: {
    GetCardProjects: (state, action) => {
      return {
        ...state,
        CardProjects: action.payload,
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

export default fetchDataProjectsCard;
export const { GetCardProjects, ShowLoading } = fetchDataProjectsCard.actions;
