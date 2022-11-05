import { combineReducers } from 'redux';

import fetchDataProjects from './fetchDataProjects';
import fetchDataProjectsCard from './fetchDataProjectsCard';

const reducer = combineReducers({
  MyProjects: fetchDataProjects.reducer,
  CardProjects: fetchDataProjectsCard.reducer,
});

export default reducer;
