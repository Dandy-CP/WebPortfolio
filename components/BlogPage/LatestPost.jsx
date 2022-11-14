import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from 'next/image';
import Link from 'next/link';

import SetLatestPost from '../../config/redux/action/fetchLatestPost';
import {
  CardPost,
  ContainerLatestPost,
  LatestPostWrap,
  ThumbnailPost,
} from '../../styles/BlogPage/LatestPost.styled';
import CardSkeleton from '../CardSkeleton';

const LatestPost = () => {
  const { LatestPostBlog, IsLoading } = useSelector(
    (state) => state.LatestPostBlog,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetLatestPost());
  }, [dispatch]);

  return (
    <ContainerLatestPost>
      <LatestPostWrap>
        {IsLoading && <CardSkeleton cards={6} />}
        {LatestPostBlog.map((data) => (
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
          </CardPost>
        ))}
      </LatestPostWrap>
    </ContainerLatestPost>
  );
};

export default LatestPost;
