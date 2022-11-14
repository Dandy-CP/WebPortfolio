import { createSlice } from '@reduxjs/toolkit';

const fetchDataCertificate = createSlice({
  name: 'GET_DATA_CERTIFICATE',
  initialState: {
    MyCertificate: [],
    IsLoading: true,
  },
  reducers: {
    GetCertificate: (state, action) => {
      return {
        ...state,
        MyCertificate: action.payload,
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

export default fetchDataCertificate;
export const { GetCertificate, ShowLoading } = fetchDataCertificate.actions;
