import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from 'next/image';
import Link from 'next/link';

import SetLatestPost from '../../config/redux/action/fetchLatestPost';
import {
  CardPost,
  ReadMoreButton,
  ThumbnailPost,
} from '../../styles/BlogPage/LatestPost.styled';
import { ContainerCardBlog, Wrap } from '../../styles/Homepage/cardblog.styled';
import { ButtonViewAll } from '../../styles/Homepage/cardproject.styled';
import CardSkeleton from '../CardSkeleton';

const CardBlog = () => {
  const { LatestPostBlog, IsLoading } = useSelector(
    (state) => state.LatestPostBlog,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetLatestPost());
  }, [dispatch]);

  return (
    <ContainerCardBlog>
      <Wrap>
        {IsLoading && <CardSkeleton cards={3} />}
        {LatestPostBlog.slice(0, 3).map((data) => (
          <CardPost key={data.postID}>
            <Link href={`Blog/${data.titlePost.replace(/ /g, '-')}`}>
              <ThumbnailPost>
                <Image
                  src={data.thumbnail}
                  alt={data.titlePost}
                  width={350}
                  height={200}
                  draggable="false"
                />
              </ThumbnailPost>
            </Link>

            <Link href={`Blog/${data.titlePost.replace(/ /g, '-')}`}>
              <h1>{data.titlePost}</h1>
            </Link>

            <p>
              Posted On {data.createdAt.slice(0, 10).replace(/-/g, '/')} | By
              Dandy Candra
            </p>

            <Link href={`Blog/${data.titlePost.replace(/ /g, '-')}`}>
              <ReadMoreButton>Read More</ReadMoreButton>
            </Link>
          </CardPost>
        ))}
      </Wrap>
      <Link href="/Blog">
        <ButtonViewAll>See My Blog</ButtonViewAll>
      </Link>
    </ContainerCardBlog>
  );
};

export default CardBlog;
