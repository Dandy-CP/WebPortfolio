import parse from 'html-react-parser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import supabase from '../../config/supabaseClient';
import AuthorImg from '../../public/Author.jpg';
import {
  ArticleContent,
  AuthorArticle,
  PostContent,
  ThumbnailImage,
  TitleArticle,
} from '../../styles/BlogPage/BlogArticle.styled';
import { MainContainer } from '../../styles/GlobalStyle';

const BlogArticle = () => {
  const [getContent, setGetContent] = useState([]);
  const router = useRouter();
  const { titleBlog } = router.query;

  const getTitleBlog = titleBlog ? titleBlog.replace(/-/g, ' ') : '';

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('BlogContentPost')
        .select()
        .eq('titlePost', `${getTitleBlog}`);

      if (error) {
        console.log(error);
      }

      if (data) {
        setGetContent(data);
      }
    };

    fetchContent();
  }, [getTitleBlog]);

  return (
    <MainContainer>
      {getContent.map((data) => (
        <ArticleContent key={data.postID}>
          <ThumbnailImage>
            <Image
              src={data.thumbnail}
              alt={data.titlePost}
              width="100%"
              height="50px"
              layout="responsive"
              objectFit="contain"
              draggable="false"
            />
          </ThumbnailImage>

          <TitleArticle>
            <h1>{data.titlePost}</h1>
            <AuthorArticle>
              <Image
                src={AuthorImg}
                alt="AuthorImg"
                width={60}
                height={55}
                draggable="false"
              />
              <p>{data.Author}</p>
              <p>·</p>
              <p>{data.createdAt.slice(0, 10).replace(/-/g, '/')}</p>
            </AuthorArticle>
          </TitleArticle>

          <PostContent>{parse(data.Content)}</PostContent>
        </ArticleContent>
      ))}
    </MainContainer>
  );
};

export default BlogArticle;
