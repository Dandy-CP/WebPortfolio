import styled from 'styled-components';

export const ContainerNewPost = styled.div`
  margin-top: 20px;
`;

export const WelcomeTextBlog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 0px;
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const NewPostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 20px;
  margin-top: 50px;
`;

export const ColumnPost = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  span {
    img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ColumnPostThumb = styled.div`
  width: 350px;
  height: 300px;
  margin-bottom: 15px;

  h1 {
    font-size: 1.25rem;
    width: 350px;
  }
`;

export const BigThumbnail = styled.div`
  width: 700px;
  height: 400px;

  h1 {
    width: 700px;
    font-size: 2.25rem;
  }

  span {
    img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
