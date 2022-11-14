import Head from 'next/head';
import Image from 'next/image';

import LatestPost from '../../components/BlogPage/LatestPost';
import twind from '../../public/images/Doodle/twind.svg';
import {
  TwindImg,
  WelcomeTextBlog,
} from '../../styles/BlogPage/LatestPost.styled';
import { MainContainer } from '../../styles/GlobalStyle';

const BlogPage = () => {
  return (
    <MainContainer>
      <Head>
        <title>Dandy Candra - Frontend Developer | Blog</title>
      </Head>
      <WelcomeTextBlog>
        <h1>
          My writings and thoughts
          <TwindImg>
            <Image
              src={twind}
              width={50}
              height={50}
              alt="twindIcon"
              draggable="false"
            />
          </TwindImg>
        </h1>
        <p>mostly write in Indonesian</p>
      </WelcomeTextBlog>

      <LatestPost />
    </MainContainer>
  );
};

export default BlogPage;
