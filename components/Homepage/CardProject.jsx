import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from 'next/image';
import Link from 'next/link';

import SetCardProjects from '../../config/redux/action/fetchDataCardProjects';
import ExternalLink from '../../public/images/Icon/external-link.svg';
import GithubLink from '../../public/images/Icon/github.svg';
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
  const { CardProjects, IsLoading } = useSelector(
    (state) => state.CardProjects,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetCardProjects());
  }, [dispatch]);

  return (
    <ContainerCard>
      <CardWrap>
        {IsLoading && <CardSkeleton cards={3} />}
        {CardProjects.slice(0, 3).map((data) => (
          <Card key={data.id}>
            <CardImageBox>
              <a href={data.DemoLink} target="_blank" rel="noreferrer">
                <Image
                  src={data.cover}
                  alt="project"
                  width={400}
                  height={250}
                />
              </a>
            </CardImageBox>
            <ProjectDescription>
              <h3>
                {data.projectName}
                <span>
                  <a href={data.githubLink} target="_blank" rel="noreferrer">
                    <Image alt="githubLink" src={GithubLink} />
                  </a>
                </span>
                <span>
                  <a href={data.DemoLink} target="_blank" rel="noreferrer">
                    <Image alt="DemoLink" src={ExternalLink} />
                  </a>
                </span>
              </h3>
              <p>{data.projectDescripton}</p>
              <TagProject>
                {data.tagTech.map((tag) => (
                  <p key={tag}>{tag}</p>
                ))}
              </TagProject>
            </ProjectDescription>
          </Card>
        ))}
      </CardWrap>

      <Link href="/Myprojects">
        <ButtonViewAll>View All</ButtonViewAll>
      </Link>
    </ContainerCard>
  );
};

export default CardProject;
