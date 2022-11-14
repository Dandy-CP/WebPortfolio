import styled from 'styled-components';

export const ContainerCardBlog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrap = styled.div`
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #000f2e;
  border: 2px solid #009ac5;
  border-radius: 10px;
  padding: 10px;
  width: 24rem;
  height: 8rem;
  max-width: 24rem;
  margin-right: 30px;

  a {
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: #009ac5;
    }
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 766px) {
    margin-bottom: 50px;
    margin-right: 0px;
  }
`;

export const BlogDescription = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  p {
    margin-top: 5px;
  }
`;

export const BlogTag = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5px;
    max-width: 50rem;
    height: 1.1rem;
    border-radius: 10px;
    background-color: #192742;
    margin: 0px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;
