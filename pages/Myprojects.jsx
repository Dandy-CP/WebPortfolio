import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardSkeleton from '../components/CardSkeleton';
import SetMyProjects from '../config/redux/action/fetchDataProjects';
import CodeSvg from '../public/images/Doodle/code2.svg';
import DemoLink from '../public/images/Icon/external-link.svg';
import GithubLink from '../public/images/Icon/github.svg';
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
  const { MyProjects, IsLoading } = useSelector((state) => state.MyProjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetMyProjects());
  }, [dispatch]);

  return (
    <MainContainer>
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

      {IsLoading && <CardSkeleton cards={8} />}

      <ContainerMyProjects>
        {MyProjects.map((list) => (
          <Card key={list.id}>
            <CardImageBox>
              <a href={list.DemoLink} target="_blank" rel="noreferrer">
                <Image
                  src={list.cover}
                  alt="project"
                  width={400}
                  height={250}
                />
              </a>
            </CardImageBox>
            <ProjectDescription>
              <h3>
                {list.projectName}
                <span>
                  <a href={list.githubLink} target="_blank" rel="noreferrer">
                    <Image alt="githubLink" src={GithubLink} />
                  </a>
                </span>
                <span>
                  <a href={list.DemoLink} target="_blank" rel="noreferrer">
                    <Image alt="DemoLink" src={DemoLink} />
                  </a>
                </span>
              </h3>
              <p>{list.projectDescripton}</p>
              <TagProject>
                {list.tagTech.map((tag) => (
                  <p key={tag}>{tag}</p>
                ))}
              </TagProject>
            </ProjectDescription>
          </Card>
        ))}
      </ContainerMyProjects>
      <MoreProjects>
        Hey, hey, hey... I&apos;ve got even more on
        <a href="https://github.com/Dandy-CP">my GitHub!</a>
      </MoreProjects>
    </MainContainer>
  );
};

export default Myprojects;
