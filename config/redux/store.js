import { configureStore } from '@reduxjs/toolkit';

import fetchDataProjects from './reducer/fetchDataProjects';
import fetchDataProjectsCard from './reducer/fetchDataProjectsCard';

const store = configureStore({
  reducer: {
    MyProjects: fetchDataProjects.reducer,
    CardProjects: fetchDataProjectsCard.reducer,
  },
});

export default store;
