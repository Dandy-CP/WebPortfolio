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
          A Junior Frontend Developer with an experience 1 year until now. Good
          skills at Javascript and Typescript language with library React.JS and
          Framework Next.JS up to Mobile Apps with React Native. Interest with
          Frontend Developer with intermediate skill level, and also interest at
          anything about design or creativity such as UI/UX Design and Design
          Graphic.
        </p>
        <a
          href="https://eyuajzwbnswumrcuzjrd.supabase.co/storage/v1/object/public/certificate/Resume%20Dandy%20Candra%20Pratama.pdf?t=2023-10-01T07%3A38%3A50.788Z"
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
