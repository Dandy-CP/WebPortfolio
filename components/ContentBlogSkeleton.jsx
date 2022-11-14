import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import {
  ArticleContent,
  AuthorArticle,
  PostContent,
  ThumbnailImage,
  TitleArticle,
} from '../styles/BlogPage/BlogArticle.styled';
import { MainContainer } from '../styles/GlobalStyle';

const ContentBlogSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <MainContainer>
        <ArticleContent>
          <ThumbnailImage>
            <Skeleton height={500} />
          </ThumbnailImage>

          <TitleArticle>
            <Skeleton height={50} style={{ marginTop: '50px' }} />
            <AuthorArticle>
              <Skeleton />
              <Skeleton />
            </AuthorArticle>
          </TitleArticle>

          <PostContent>
            <Skeleton count={10} height={25} style={{ marginBottom: '10px' }} />
          </PostContent>
        </ArticleContent>
      </MainContainer>
    </SkeletonTheme>
  );
};

export default ContentBlogSkeleton;
