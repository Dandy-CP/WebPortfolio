import styled from 'styled-components';

export const ContainerCardSkeleton = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    justify-content: center;
  }

  @media screen and (max-width: 766px) {
    padding: 0px;
    margin-left: 0px;
  }
`;

export const CardProjectSkeleton = styled.div`
  width: 23rem;
  margin-left: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 766px) {
    margin-left: 10px;
  }
`;

export const ImageSkeleton = styled.div`
  border: 1px solid #7b89a8;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const TitleSkeleton = styled.div`
  margin-bottom: 5px;
`;
