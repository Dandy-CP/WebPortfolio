import {
  BlogDescription,
  BlogTag,
  Card,
  ContainerCardBlog,
  Wrap,
} from '../../styles/Homepage/cardblog.styled';
import { ButtonViewAll } from '../../styles/Homepage/cardproject.styled';

const CardBlog = () => {
  return (
    <ContainerCardBlog>
      <Wrap>
        <Card>
          <BlogDescription>
            <h2>Tutorial Menginstal React JS Sampe Jago Banget</h2>
            <BlogTag>
              <p>React</p>
              <p>Tutorial</p>
            </BlogTag>
          </BlogDescription>
          <h4>Read More</h4>
        </Card>

        <Card>
          <BlogDescription>
            <h2>Tutorial Menginstal React JS Sampe Jago Banget</h2>
            <BlogTag>
              <p>React</p>
              <p>Tutorial</p>
            </BlogTag>
          </BlogDescription>
          <h4>Read More</h4>
        </Card>

        <Card>
          <BlogDescription>
            <h2>Tutorial Menginstal React JS Sampe Jago Banget</h2>
            <BlogTag>
              <p>React</p>
              <p>Tutorial</p>
            </BlogTag>
          </BlogDescription>
          <h4>Read More</h4>
        </Card>
      </Wrap>
      <ButtonViewAll>See My Blog</ButtonViewAll>
    </ContainerCardBlog>
  );
};

export default CardBlog;
