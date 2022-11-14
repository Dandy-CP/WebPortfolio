import { configureStore } from '@reduxjs/toolkit';

import fetchBlogContent from './reducer/fetchBlogContent';
import fetchDataCertificate from './reducer/fetchDataCertificate';
import fetchDataProjects from './reducer/fetchDataProjects';
import fetchDataProjectsCard from './reducer/fetchDataProjectsCard';
import fetchLatestPost from './reducer/fetchLatestPost';

const store = configureStore({
  reducer: {
    MyProjects: fetchDataProjects.reducer,
    CardProjects: fetchDataProjectsCard.reducer,
    MyCertificate: fetchDataCertificate.reducer,
    LatestPostBlog: fetchLatestPost.reducer,
    BlogContent: fetchBlogContent.reducer,
  },
});

export default store;
