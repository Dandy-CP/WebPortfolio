import Image from 'next/image';

import CardBlog from '../components/Homepage/CardBlog';
import CardProject from '../components/Homepage/CardProject';
import Introduction from '../components/Homepage/Introduction';
import Skills from '../components/Homepage/Skills';
import TitleHero from '../components/Homepage/TitleHero';
import LineBreak from '../public/images/Doodle/line.svg';
import Ornament from '../public/images/Doodle/ornament.svg';
import { MainContainer } from '../styles/GlobalStyle';
import {
  ButtonEmail,
  ContainerHeading,
  EndSection,
  Heading,
  HeadingIntro,
  HeadingText,
  OrnamentImage,
  TextIntroduction,
} from '../styles/Homepage/headingProject.styled';

export default function Home() {
  return (
    <MainContainer>
      <TitleHero />

      <HeadingIntro>
        <TextIntroduction>Introduction.</TextIntroduction>
      </HeadingIntro>

      <Introduction />

      <ContainerHeading>
        <Heading>
          <HeadingText>Here are a few of my projects.</HeadingText>
        </Heading>
      </ContainerHeading>

      <CardProject />

      <Skills />

      <ContainerHeading>
        <Heading>
          <HeadingText>A blog to share my thought and tutorial.</HeadingText>
        </Heading>
      </ContainerHeading>

      <CardBlog />

      <EndSection>
        <Image alt="line" src={LineBreak} draggable="false" />
        <h1>Thats All My Portfolio, Thank You...</h1>
        <ButtonEmail>Get in Touch</ButtonEmail>
        <OrnamentImage>
          <Image alt="ornament" src={Ornament} width={1000} draggable="false" />
        </OrnamentImage>
      </EndSection>
    </MainContainer>
  );
}
