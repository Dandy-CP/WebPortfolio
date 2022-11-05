import styled from 'styled-components';

export const ContainerLatestPost = styled.div`
  margin-top: 50px;
`;

export const LatestPostWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardPost = styled.div`
  width: 350px;
  margin-right: 50px;
  margin-bottom: 50px;

  h1 {
    font-size: 1.3rem;
    margin-left: 10px;
    margin-bottom: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #00c7ff;
    }
  }

  p {
    margin-top: 0px;
    margin-left: 10px;
  }
`;

export const ThumbnailPost = styled.div`
  width: 350px;
  height: 200px;
  border: 1px solid #7b89a8;
  border-radius: 10px;
  padding: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid #00c7ff;
    transform: translateY(-15px);
  }

  span {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const TwindImg = styled.div`
  position: absolute;
  margin-left: 700px;
  top: 130px;
`;
