import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 100px;
  overflow-x: hidden;
`;

export const ContainerHeading = styled.div`
  display: flex;
  margin-top: 100px;
  overflow-x: hidden;
`;

export const HeadingIntro = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 200px;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
  }
`;

export const Heading = styled.div`
  display: flex;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    margin: 0 auto;
  }
`;

export const HeadingText = styled.h2`
  position: relative;
  width: 100%;
  font-size: 30px;
  &::before {
    content: ' ';
    position: absolute;
    left: 105%;
    right: 0;
    top: 50%;
    border-top: 4px solid #00c7ff;
    display: block;
    height: 4px;
    width: 165%;
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    &::before {
      left: 28%;
      right: 0;
      top: -50%;
      width: 40%;
    }
  }

  @media screen and (max-width: 766px) {
    text-align: center;
    &::before {
      left: 30%;
      right: 0;
      top: -30%;
      width: 40%;
    }
  }
`;

export const TextIntroduction = styled.h2`
  position: relative;
  /* width: 100%; */
  font-size: 30px;
  text-align: center;
  &::before {
    content: ' ';
    position: absolute;
    left: 105%;
    right: 0;
    top: 50%;
    border-top: 4px solid #00c7ff;
    display: block;
    height: 4px;
    width: 100%;
  }

  &::after {
    content: ' ';
    position: absolute;
    right: 0;
    right: 105%;
    top: 50%;
    border-top: 4px solid #00c7ff;
    display: block;
    height: 4px;
    width: 100%;
  }

  @media screen and (max-width: 766px) {
    margin-top: 40px;

    &::before {
      width: 30%;
    }
    &::after {
      width: 30%;
    }
  }
`;

export const ListProject = styled.div`
  display: flex;
`;

export const EndSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  z-index: 1;

  h1 {
    font-size: 3rem;
    margin-top: 50px;
  }

  @media screen and (max-width: 766px) {
    h1 {
      font-size: 1.7rem;
      text-align: center;
    }
  }
`;

export const ButtonEmail = styled.button`
  box-sizing: border-box;
  background-color: transparent;
  color: white;
  width: 13rem;
  height: 60px;
  margin-top: 20px;
  font-size: 18px;
  border: 3px solid white;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    border: 3px solid #00c7ff;
    background-color: #00c7ff;
    color: white;
  }
`;

export const OrnamentImage = styled.div`
  display: flex;
  position: absolute;
  /* object-fit: cover; */
  /* top: 247%; */
  /* top: 2550px; */
  /* bottom: 50%;  */
  /*  width: 100%; */
  margin-top: 500px;
  height: 50%;
  z-index: -1;

  @media screen and (max-width: 766px) {
    margin-top: 400px;
  }
`;
