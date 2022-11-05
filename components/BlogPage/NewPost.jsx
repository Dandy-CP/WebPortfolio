import Image from 'next/image';

import ThumbnailPost from '../../public/images/BlogThumbnail/BlogThumbnail.jpg';
import {
  BigThumbnail,
  ColumnPost,
  ColumnPostThumb,
  ContainerNewPost,
  NewPostWrap,
  WelcomeTextBlog,
} from '../../styles/BlogPage/NewPost.styled';

const NewPost = () => {
  return (
    <ContainerNewPost>
      <WelcomeTextBlog>
        <h1>My writings and thoughts</h1>
        <p>mostly write in Indonesian</p>
      </WelcomeTextBlog>

      <NewPostWrap>
        <BigThumbnail>
          <Image src={ThumbnailPost} alt="Thumbnail" />
          <h1>Belajar ReactJS Sampe Jago Bingitssssssssss</h1>
        </BigThumbnail>

        <ColumnPost>
          <ColumnPostThumb>
            <Image src={ThumbnailPost} alt="Thumbnail" />
            <h1>Belajar ReactJS Sampe Jago Bingitssssssssss</h1>
          </ColumnPostThumb>
          <ColumnPostThumb>
            <Image src={ThumbnailPost} alt="Thumbnail" />
            <h1>Belajar ReactJS Sampe Jago</h1>
          </ColumnPostThumb>
        </ColumnPost>
      </NewPostWrap>
    </ContainerNewPost>
  );
};

export default NewPost;
