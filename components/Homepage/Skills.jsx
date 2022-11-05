import Image from 'next/image';

import CodeSvg from '../../public/images/Doodle/code2.svg';
import Sprinkle from '../../public/images/Doodle/sprinkle.svg';
import Css from '../../public/images/Icon/CSS.svg';
import Figma from '../../public/images/Icon/Figma.svg';
import Firebase from '../../public/images/Icon/Firebase.svg';
import Git from '../../public/images/Icon/GIT.svg';
import Html from '../../public/images/Icon/HTML.svg';
import Javascript from '../../public/images/Icon/JAVASCRIPT.svg';
import Next from '../../public/images/Icon/NextJS.svg';
import React from '../../public/images/Icon/React.svg';
import SupabaseLogo from '../../public/images/Icon/supabase.svg';
import {
  ContainerSkill,
  Skill,
  SkillHeading,
  SkillsLogo,
} from '../../styles/Homepage/Skills.styled';

const Skills = () => {
  return (
    <ContainerSkill>
      <SkillHeading>
        <Image
          alt="springkle"
          src={CodeSvg}
          width={100}
          draggable="false"
          style={{ rotate: '-20deg' }}
        />
        <h1>
          I will keep learning. <br /> Here is my toolbelt for work.
          <Image alt="springkle" src={Sprinkle} width={50} draggable="false" />
        </h1>
      </SkillHeading>

      <SkillsLogo>
        <Skill>
          <Image
            src={Html}
            alt="HTML"
            width={50}
            height={50}
            draggable="false"
          />
          <p>HTML</p>
        </Skill>

        <Skill>
          <Image src={Css} alt="CSS" width={50} height={50} draggable="false" />
          <p>CSS</p>
        </Skill>

        <Skill>
          <Image
            src={Javascript}
            alt="Javascript"
            width={50}
            height={50}
            draggable="false"
          />
          <p>Javascript</p>
        </Skill>

        <Skill>
          <Image
            src={React}
            alt="ReactJS"
            width={50}
            height={50}
            draggable="false"
          />
          <p>React JS</p>
        </Skill>

        <Skill>
          <Image
            src={Next}
            alt="NextJS"
            width={50}
            height={50}
            draggable="false"
          />
          <p>Next JS</p>
        </Skill>

        <Skill>
          <Image src={Git} alt="Git" width={50} height={50} draggable="false" />
          <p>Git</p>
        </Skill>

        <Skill>
          <Image
            src={Firebase}
            alt="Firebase"
            width={50}
            height={50}
            draggable="false"
          />
          <p>Firebase</p>
        </Skill>

        <Skill>
          <Image
            src={SupabaseLogo}
            alt="Supabase"
            width={50}
            height={50}
            draggable="false"
          />
          <p>Supabase</p>
        </Skill>

        <Skill>
          <Image
            src={Figma}
            alt="Figma"
            width={50}
            height={50}
            draggable="false"
          />
          <p>Figma</p>
        </Skill>
      </SkillsLogo>
    </ContainerSkill>
  );
};

export default Skills;
