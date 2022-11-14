import { combineReducers } from 'redux';

import fetchBlogContent from './fetchBlogContent';
import fetchDataCertificate from './fetchDataCertificate';
import fetchDataProjects from './fetchDataProjects';
import fetchDataProjectsCard from './fetchDataProjectsCard';
import fetchLatestPost from './fetchLatestPost';

const reducer = combineReducers({
  MyProjects: fetchDataProjects.reducer,
  CardProjects: fetchDataProjectsCard.reducer,
  MyCertificate: fetchDataCertificate.reducer,
  LatestPostBlog: fetchLatestPost.reducer,
  BlogContent: fetchBlogContent.reducer,
});

export default reducer;
