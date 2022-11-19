import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { DiscussionEmbed } from 'disqus-react';
import parse from 'html-react-parser';
import Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

import ContentBlogSkeleton from '../../components/ContentBlogSkeleton';
import SetBlogContent from '../../config/redux/action/fetchBlogContent';
import AuthorImg from '../../public/Author.jpg';
import {
  ArticleContent,
  AuthorArticle,
  DisqusContainer,
  PostContent,
  ThumbnailImage,
  TitleArticle,
} from '../../styles/BlogPage/BlogArticle.styled';
import { MainContainer } from '../../styles/GlobalStyle';

const BlogArticle = () => {
  const { BlogContent, IsLoading } = useSelector((state) => state.BlogContent);
  const dispatch = useDispatch();
  const router = useRouter();
  const { asPath } = useRouter();
  const { titleBlog } = router.query;

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  const URL = `${origin}${asPath}`;

  const getTitleBlog = titleBlog ? titleBlog.replace(/-/g, ' ') : '';

  useEffect(() => {
    dispatch(SetBlogContent(`${getTitleBlog}`));

    setTimeout(() => {
      Prism.highlightAll();
    }, 3000);
  }, [dispatch, getTitleBlog]);

  return (
    <MainContainer>
      {IsLoading && <ContentBlogSkeleton />}
      {BlogContent.map((data) => (
        <ArticleContent key={data.postID}>
          <Head>
            <title>{data.titlePost}</title>
          </Head>
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
                width={55}
                height={50}
                draggable="false"
              />
              <p>{data.Author}</p>
              <p>·</p>
              <p>{data.createdAt.slice(0, 10).replace(/-/g, '/')}</p>
            </AuthorArticle>
          </TitleArticle>

          <PostContent>{parse(`${data.Content}`)}</PostContent>

          <DisqusContainer>
            <DiscussionEmbed
              shortname="dandycandra"
              config={{
                url: `${URL}`,
                identifier: data.postID,
                title: data.titlePost,
              }}
            />
          </DisqusContainer>
        </ArticleContent>
      ))}
    </MainContainer>
  );
};

export default BlogArticle;
