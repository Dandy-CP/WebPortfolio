import styled from 'styled-components';

export const ArticleContent = styled.article`
  margin-top: 50px;
`;

export const ThumbnailImage = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;

  span {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const TitleArticle = styled.div`
  width: 900px;
  text-align: center;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
  }
`;

export const AuthorArticle = styled.div`
  display: flex;
  justify-content: center;
  p {
    margin-left: 20px;
  }

  span {
    img {
      border-radius: 50%;
    }
  }
`;

export const PostContent = styled.div`
  padding: 50px;

  p {
    font-size: 1.25rem;
  }
`;
