import styled from 'styled-components';

export const TitleCertificate = styled.div`
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
    h1 {
      font-size: 3.55rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export const ContainerCertificate = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    justify-content: center;
  }

  @media screen and (max-width: 766px) {
    padding: 20px;
  }
`;

export const CardCertif = styled.div`
  border: 1px solid #7b89a8;
  border-radius: 10px;
  padding: 10px;
  margin-right: 25px;
  transition: 0.3s ease-in-out;

  &:hover {
    border: 1px solid #00c7ff;
    transform: translateY(-15px);
  }

  @media screen and (max-width: 766px) {
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;
