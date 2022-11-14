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

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 700px;
  }

  @media screen and (max-width: 766px) {
    width: 300px;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const AuthorArticle = styled.div`
  display: flex;
  justify-content: center;
  p {
    margin-left: 15px;
  }

  span {
    img {
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 766px) {
    p {
      font-size: 0.8rem;
      margin-left: 5px;
    }
  }
`;

export const PostContent = styled.div`
  padding: 50px;

  p {
    font-size: 1.25rem;
  }

  pre {
    border-radius: 10px;

    code {
      font-size: 17px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 766px) {
    padding: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const DisqusContainer = styled.div`
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 700px;
    margin: 0 auto;
  }

  @media screen and (max-width: 766px) {
    width: 350px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 100px;
  }
`;
