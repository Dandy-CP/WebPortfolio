import styled from 'styled-components';

export const ContainerLatestPost = styled.div`
  margin-top: 50px;
`;

export const LatestPostWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    justify-content: center;
  }

  @media screen and (max-width: 766px) {
    justify-content: center;
  }
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

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 766px) {
    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const CardPost = styled.div`
  width: 350px;
  margin-top: 20px;
  margin-right: 50px;
  margin-bottom: 25px;

  h1 {
    height: 55px;
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

  @media screen and (max-width: 766px) {
    margin-right: 0px;
    width: 330px;

    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
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

  @media screen and (max-width: 766px) {
    width: 300px;
    height: 170px;
  }
`;

export const ReadMoreButton = styled.button`
  box-sizing: border-box;
  background-color: transparent;
  color: #00c7ff;
  width: 10rem;
  height: 40px;
  margin-left: 100px;
  margin-top: 5px;
  font-size: 17px;
  border: 1px solid #00c7ff;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #00c7ff;
    color: white;
  }

  @media screen and (max-width: 766px) {
    margin-left: 80px;
  }
`;

export const TwindImg = styled.div`
  position: absolute;
  margin-left: 700px;
  top: 130px;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    margin-left: 600px;
  }

  @media screen and (max-width: 766px) {
    margin-left: 280px;
    top: 100px;
  }
`;
