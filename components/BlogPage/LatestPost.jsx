import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import supabase from '../../config/supabaseClient';
import {
  CardPost,
  ContainerLatestPost,
  LatestPostWrap,
  ThumbnailPost,
} from '../../styles/BlogPage/LatestPost.styled';

const LatestPost = () => {
  const [getBlogList, setGetBlogList] = useState([]);

  useEffect(() => {
    const fetchBlogList = async () => {
      const { data, error } = await supabase.from('BlogContentPost').select();

      if (error) {
        console.log(error);
      }

      if (data) {
        setGetBlogList(data);
        console.log(data);
      }
    };

    fetchBlogList();
  }, []);

  return (
    <ContainerLatestPost>
      <LatestPostWrap>
        {getBlogList.map((data) => (
          <CardPost key={data.postID}>
            <ThumbnailPost>
              <Link href={`Blog/${data.titlePost.replace(/ /g, '-')}`}>
                <Image
                  src={data.thumbnail}
                  alt={data.titlePost}
                  width={350}
                  height={200}
                  draggable="false"
                />
              </Link>
            </ThumbnailPost>

            <Link href={`Blog/${data.titlePost.replace(/ /g, '-')}`}>
              <h1>{data.titlePost}</h1>
            </Link>

            <p>Posted On {data.createdAt.slice(0, 10).replace(/-/g, '/')}</p>
          </CardPost>
        ))}
      </LatestPostWrap>
    </ContainerLatestPost>
  );
};

export default LatestPost;
