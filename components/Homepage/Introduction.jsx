import Image from 'next/image';

import MySelf from '../../public/MySelf.png';
import Sprinkle from '../../public/images/Doodle/sprinkle.svg';
import {
  ButtonCV,
  ContainerIntro,
  DescIntro,
  MySelfImg,
} from '../../styles/Homepage/introduction.styled';

const Introduction = () => {
  return (
    <ContainerIntro>
      <MySelfImg>
        <Image
          alt="MySelf"
          src={MySelf}
          width={400}
          height={450}
          draggable="false"
        />
      </MySelfImg>

      <DescIntro>
        <Image alt="sprinkle" src={Sprinkle} width={50} draggable="false" />
        <p>
          I am a Fresh-graduate Telkom University D4 Multimedia Engineering
          Technology Study Program in 2022. I have the ability to build and
          design Frontend Websites with the latest technology using HTML, CSS,
          Javascript and React.JS and also understand Framework and libraries
          for Frontend. My current activity is actively seeking Frontend Web
          Developer knowledge and creating independent projects. I have an
          interest in a career as a Frontend Web Developer and am proficient in
          building and implementing Functional, Responsive Design of Websites.
        </p>
        <a
          href="https://eyuajzwbnswumrcuzjrd.supabase.co/storage/v1/object/public/certificate/Dandycp_resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonCV>My Resume</ButtonCV>
        </a>
      </DescIntro>
    </ContainerIntro>
  );
};

export default Introduction;
