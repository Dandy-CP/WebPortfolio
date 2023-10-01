import styled, { keyframes } from 'styled-components';

export const ContainerHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  margin-top: 30px;
  margin-bottom: 100px;

  @media screen and (max-width: 766px) {
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 1100px; */
  position: relative;

  p {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
  }

  h1 {
    font-size: 4.5rem;
    width: 1100px;
    text-align: center;
    margin-top: 0px;

    span {
      color: #00c7ff;
    }
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 750px;

    h1 {
      font-size: 3rem;
      width: 750px;
    }
  }

  @media screen and (max-width: 766px) {
    width: 370px;
    h1 {
      font-size: 2.2rem;
      width: 370px;
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  width: 230px;
  height: 60px;
  border-radius: 50px;
  border: 3px solid white;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #00c7ff;
    border: 1px solid #00c7ff;
    cursor: pointer;
  }

  @media screen and (max-width: 766px) {
    width: 200px;
    height: 50px;
    font-size: 1rem;
    background-color: #000a1f;
    z-index: 1;
  }
`;

const floating = keyframes`
  100% {
    transform: translateY(5px);
    -webkit-transform: translateY(5px);
    -moz-transform: translateY(5px);
    -ms-transform: translateY(5px);
    -o-transform: translateY(5px);
  }
`;

export const ImageFloating = styled.div`
  position: absolute;
  animation: ${floating} 1s infinite ease-in-out alternate;
  -webkit-animation: ${floating} 1s infinite ease-in-out alternate;

  span {
    img {
      opacity: 0.5;
      transition: 0.5s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const FloatingHtml = styled(ImageFloating)`
  right: 20%;
  margin-bottom: 300px;
  rotate: 20deg;
  animation-delay: 0.1s;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    margin-bottom: 250px;
  }
`;

export const FloatingJS = styled(ImageFloating)`
  right: 70%;
  margin-bottom: -350px;
  rotate: -20deg;
  animation-delay: 0.2s;

  @media screen and (max-width: 766px) {
    right: 67%;
    width: 90px;
    height: 90px;
  }
`;

export const FloatingCode = styled(ImageFloating)`
  right: 90%;
  margin-bottom: -350px;
  rotate: -30deg;
  animation-delay: 0.3s;

  @media screen and (max-width: 766px) {
    display: none;
  }
`;

export const FloatingDino = styled(ImageFloating)`
  right: 50%;
  margin-bottom: -650px;
  rotate: -20deg;
  animation-delay: 0.4s;

  @media screen and (max-width: 766px) {
    right: 65%;
    width: 100px;
    height: 100px;
  }
`;

export const FloatingNext = styled(ImageFloating)`
  right: 2%;
  margin-bottom: -650px;
  rotate: -20deg;
  animation-delay: 0.5s;

  @media screen and (max-width: 766px) {
    width: 200px;
    height: 85px;
    margin-bottom: -600px;
  }
`;

export const FloatingReact = styled(ImageFloating)`
  right: 15%;
  margin-bottom: -320px;
  animation-delay: 0.6s;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    right: 10%;
  }

  @media screen and (max-width: 766px) {
    right: 5%;
    width: 100px;
    height: 100px;
  }
`;

export const FloatingCSS = styled(ImageFloating)`
  right: 80%;
  margin-bottom: -700px;
  rotate: 20deg;
  animation-delay: 0.7s;

  @media screen and (max-width: 766px) {
    display: none;
  }
`;

export const ImageText = styled.div`
  position: absolute;
  right: 73%;
  margin-bottom: 300px;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    margin-bottom: 250px;
  }

  @media screen and (max-width: 766px) {
    display: none;
  }
`;
