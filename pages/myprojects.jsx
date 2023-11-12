import Head from 'next/head';
import Image from 'next/image';

import CardSkeleton from '../components/CardSkeleton';
import CodeSvg from '../public/images/Doodle/code2.svg';
import DemoLink from '../public/images/Icon/external-link.svg';
import GithubLink from '../public/images/Icon/github.svg';
import { GetProjects } from '../service/api/projects/projects.query';
import { MainContainer } from '../styles/GlobalStyle';
import {
  Card,
  CardImageBox,
  ProjectDescription,
  TagProject,
} from '../styles/Homepage/cardproject.styled';
import {
  CodeImage,
  ContainerMyProjects,
  MoreProjects,
  TitleMyProjects,
} from '../styles/MyProjects/myProjects.styled';

const Myprojects = () => {
  const { data: MyProjects, isLoading } = GetProjects({
    sizeData: 10,
    pageData: 0,
  });

  return (
    <MainContainer>
      <Head>
        <title>Dandy Candra - Frontend Developer | My Projects</title>
      </Head>

      <TitleMyProjects>
        <CodeImage>
          <Image alt="code" src={CodeSvg} width={80} height={80} />
        </CodeImage>

        <h1>Projects</h1>

        <p>
          I&apos;ve built dynamic website and slicing static website using
          anything from HTML to React (and even PHP!). Here are some of my
          projects over the course of my journey.
        </p>
      </TitleMyProjects>

      {isLoading ? (
        <CardSkeleton cards={8} />
      ) : (
        <ContainerMyProjects>
          {MyProjects?.items.map((list) => (
            <Card key={list.id}>
              <CardImageBox>
                <a href={list.demo_link} target="_blank" rel="noreferrer">
                  <Image
                    src={list.project_image}
                    alt="project"
                    width={400}
                    height={250}
                  />
                </a>
              </CardImageBox>

              <ProjectDescription>
                <h3>
                  {list.project_name}
                  <span>
                    <a
                      href={list.source_code_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image alt="githubLink" src={GithubLink} />
                    </a>
                  </span>

                  <span>
                    <a href={list.demo_link} target="_blank" rel="noreferrer">
                      <Image alt="DemoLink" src={DemoLink} />
                    </a>
                  </span>
                </h3>

                <p>{list.description}</p>

                <TagProject>
                  {list?.tech_stack.map((tag) => (
                    <p key={tag}>{tag}</p>
                  ))}
                </TagProject>
              </ProjectDescription>
            </Card>
          ))}
        </ContainerMyProjects>
      )}

      <MoreProjects>
        Hey, hey, hey... I&apos;ve got even more on
        <a href="https://github.com/Dandy-CP">my GitHub!</a>
      </MoreProjects>
    </MainContainer>
  );
};

export default Myprojects;
