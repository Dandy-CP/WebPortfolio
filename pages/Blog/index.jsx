import Image from 'next/image';

import LatestPost from '../../components/BlogPage/LatestPost';
import twind from '../../public/images/Doodle/twind.svg';
import { TwindImg } from '../../styles/BlogPage/LatestPost.styled';
import { WelcomeTextBlog } from '../../styles/BlogPage/NewPost.styled';
import { MainContainer } from '../../styles/GlobalStyle';

const BlogPage = () => {
  return (
    <MainContainer>
      <WelcomeTextBlog>
        <h1>
          My writings and thoughts
          <TwindImg>
            <Image src={twind} width={50} height={50} draggable="false" />
          </TwindImg>
        </h1>
        <p>mostly write in Indonesian</p>
      </WelcomeTextBlog>

      <LatestPost />
    </MainContainer>
  );
};

export default BlogPage;
