import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ExternalLink from '../../public/images/Icon/external-link.svg';
import GithubLink from '../../public/images/Icon/github.svg';
import { GetProjects } from '../../service/api/projects/projects.query';
import {
  ButtonViewAll,
  Card,
  CardImageBox,
  CardWrap,
  ContainerCard,
  ProjectDescription,
  TagProject,
} from '../../styles/Homepage/cardproject.styled';
import CardSkeleton from '../CardSkeleton';

const CardProject = () => {
  const { data: MyProjects, isLoading } = GetProjects({
    sizeData: 10,
    pageData: 0,
  });

  return (
    <ContainerCard>
      <CardWrap>
        {isLoading ? (
          <CardSkeleton cards={3} />
        ) : (
          <React.Fragment>
            {MyProjects?.items?.slice(0, 3).map((list) => (
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
                        <Image alt="DemoLink" src={ExternalLink} />
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
          </React.Fragment>
        )}
      </CardWrap>

      <Link href="/myprojects">
        <ButtonViewAll>View All</ButtonViewAll>
      </Link>
    </ContainerCard>
  );
};

export default CardProject;
