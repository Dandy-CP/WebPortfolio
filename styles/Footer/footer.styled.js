import styled, { keyframes } from 'styled-components';

export const Container = styled.footer`
  padding: 50px;
  margin-top: 100px;
  border-top: 1px solid #000f2e;
  background-color: #000a1f;
  position: relative;
  z-index: 1;

  h3 {
    font-size: 0.875rem;
    font-weight: 800;
    color: #7b89a8;
  }

  @media screen and (max-width: 766px) {
    padding: 20px;
    margin-top: 0px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 70rem;
  margin: 0 auto;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 40rem;
  }

  @media screen and (max-width: 766px) {
    width: 15rem;
  }
`;

export const HeadingFooter = styled.div`
  display: flex;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const PagesMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListMenu = styled.ul`
  list-style: none;
  padding-left: 0px;

  li {
    /* margin-bottom: 15px; */
    margin-left: 10px;
    font-size: 1.1rem;
  }

  a {
    &:hover {
      color: #00c7ff;
    }
  }
`;

export const ListPage = styled.ul`
  list-style: none;
  padding-left: 0px;

  li {
    cursor: pointer;
    margin-bottom: 15px;
    font-size: 1.1rem;

    &:hover {
      color: #00c7ff;
    }
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CvAndCertif = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 766px) {
    display: none;
  }
`;

export const CvNCertifMobile = styled.div`
  display: none;

  @media screen and (max-width: 766px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #192742;
  }
`;

export const ButtonCvNCertif = styled.button`
  box-sizing: border-box;
  background-color: transparent;
  color: #00c7ff;
  width: 13rem;
  height: 55px;
  margin-top: 20px;
  font-size: 18px;
  border: 1px solid #00c7ff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #00c7ff;
    color: white;
  }
`;

export const ContainerMade = styled.div`
  display: flex;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media screen and (max-width: 766px) {
    flex-direction: column;
  }
`;

export const MadeWith = styled.div`
  width: 60rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  border-top: 1px solid #192742;

  p {
    color: #7b89a8;
    font-size: 0.85rem;
    margin-top: 0px;
    margin-bottom: 5px;

    a {
      font-weight: 600;
      margin-left: 3px;
      &:hover {
        color: #00c7ff;
      }
    }
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 40rem;
  }

  @media screen and (max-width: 766px) {
    width: 20rem;
  }
`;

export const LogoStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  h3 {
    margin-right: 20px;
  }
`;

export const Logo = styled.div`
  margin-right: 15px;
`;

const LogoRotate = keyframes`
  from {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
  }
`;

export const LogoReact = styled.div`
  margin-right: 10px;

  span {
    img {
      animation: ${LogoRotate} 5s infinite linear;
      -webkit-animation: ${LogoRotate} 5s infinite linear;
    }
  }
`;

export const SourceGithub = styled.div`
  position: absolute;
  margin-top: 50px;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    position: static;
    margin-top: 0px;
    margin: 0 auto;
  }

  @media screen and (max-width: 766px) {
    position: static;
    margin-top: 0px;
    margin: 0 auto;
  }
`;

export const SourceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: transparent;
  color: #00c7ff;
  width: 15rem;
  height: 40px;
  margin-top: 50px;
  font-size: 17px;
  border: 1px solid #00c7ff;
  border-radius: 10px;
  opacity: 0.5;
  cursor: pointer;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 766px) {
    margin-top: 20px;
  }
`;
