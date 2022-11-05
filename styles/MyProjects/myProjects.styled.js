import styled from 'styled-components';

export const ContainerMyProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    justify-content: center;
  }

  @media screen and (max-width: 766px) {
    padding: 15px;
    margin-left: 10px;
  }
`;

export const TitleMyProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-size: 3.75rem;
    margin-bottom: 0px;
  }

  p {
    font-size: 1.5rem;
    max-width: 48rem;
    text-align: center;
  }

  @media screen and (max-width: 766px) {
    margin-left: 10px;

    p {
      font-size: 1.25rem;
    }
  }
`;

export const CodeImage = styled.div`
  position: absolute;
  margin-left: 300px;
  rotate: 20deg;
`;

export const MoreProjects = styled.p`
  text-align: center;
  font-size: 0.875rem;
  font-style: italic;
  margin-top: 100px;

  a {
    color: #00ace0;
    text-decoration: underline;
    margin-left: 5px;
  }

  @media screen and (max-width: 766px) {
    margin-top: 20px;
    margin-bottom: 50px;
  }
`;
