import styled from 'styled-components';

export const ContainerIntro = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media screen and (max-width: 766px) {
    flex-direction: column;
  }
`;

export const MySelfImg = styled.div`
  @media screen and (max-width: 766px) {
    padding: 30px;
  }
`;

export const DescIntro = styled.div`
  width: 850px;
  margin-left: 50px;
  p {
    font-size: 1.1rem;
    font-weight: 500;
    text-align: justify;
    text-justify: inter-character;
    line-height: 1.5;
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 700px;
    margin-left: 0px;
  }

  @media screen and (max-width: 766px) {
    width: 300px;
    margin-left: 0px;
  }
`;

export const ButtonCV = styled.button`
  box-sizing: border-box;
  background-color: transparent;
  color: #00c7ff;
  width: 10rem;
  height: 50px;
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
