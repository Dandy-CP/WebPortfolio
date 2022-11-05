import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 23rem;
  margin-left: 25px;
  margin-bottom: 30px;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 766px) {
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardWrap = styled.div`
  display: flex;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media screen and (max-width: 766px) {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const CardImageBox = styled.div`
  border: 1px solid #7b89a8;
  border-radius: 10px;
  padding: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    border: 1px solid #00c7ff;
    transform: translateY(-15px);
  }
`;

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-top: 0px;
  }

  span {
    float: right;
    margin-left: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const TagProject = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5px;
    max-width: 50rem;
    height: 1.5rem;
    border-radius: 10px;
    background-color: #192742;
    margin: 0px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;

export const ButtonViewAll = styled.button`
  box-sizing: border-box;
  background-color: transparent;
  color: #00c7ff;
  width: 42rem;
  height: 55px;
  margin-top: 50px;
  font-size: 18px;
  border: 3px solid #00c7ff;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #00c7ff;
    color: white;
  }

  @media screen and (max-width: 766px) {
    width: 20rem;
  }
`;
