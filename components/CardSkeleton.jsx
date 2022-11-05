import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import {
  CardProjectSkeleton,
  ContainerCardSkeleton,
  ImageSkeleton,
  TitleSkeleton,
} from '../styles/CardSkeleton.styled';

const CardSkeleton = ({ cards }) => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <ContainerCardSkeleton>
        {Array(cards)
          .fill(0)
          .map((_, index) => (
            <CardProjectSkeleton key={index}>
              <ImageSkeleton>
                <Skeleton height={250} />
              </ImageSkeleton>
              <TitleSkeleton>
                <Skeleton count={3} />
              </TitleSkeleton>
            </CardProjectSkeleton>
          ))}
      </ContainerCardSkeleton>
    </SkeletonTheme>
  );
};

export default CardSkeleton;
