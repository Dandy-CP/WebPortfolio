import Image from 'next/image';

import JsSvg from '../../public/images/Doodle/JS.svg';
import CodeSvg from '../../public/images/Doodle/code2.svg';
import CssSvg from '../../public/images/Doodle/css.svg';
import DinoSvg from '../../public/images/Doodle/dino.svg';
import Fireworks from '../../public/images/Doodle/fireworks.svg';
import HtmlSvg from '../../public/images/Doodle/html.svg';
import NextSvg from '../../public/images/Doodle/next.svg';
import ReactSvg from '../../public/images/Doodle/react2.svg';
import Sprinkle from '../../public/images/Doodle/sprinkle.svg';
import {
  Button,
  ContainerHero,
  FloatingCSS,
  FloatingCode,
  FloatingDino,
  FloatingHtml,
  FloatingJS,
  FloatingNext,
  FloatingReact,
  ImageText,
  Title,
} from '../../styles/Homepage/heroTitle.styled';

const TitleHero = () => {
  const handleSmoothScroll = (IDtag) => {
    const targetId = IDtag.replace(/.*#/, '');
    const elem = document.getElementById(targetId);
    elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ContainerHero>
      <Title>
        <ImageText>
          <Image
            alt="html"
            src={Fireworks}
            width={120}
            height={120}
            draggable="false"
          />
        </ImageText>

        <p>
          Hey, I&apos;m Dandy Candra.
          <Image
            alt="springkle"
            src={Sprinkle}
            width={30}
            height={30}
            draggable="false"
          />
        </p>
        <h1>
          I enjoy <span>building</span> and <br /> <span>learning</span> for the
          frontend web.
        </h1>

        <Button
          onClick={() => {
            handleSmoothScroll('#intro');
          }}
        >
          Tell Me More
        </Button>

        <FloatingHtml>
          <Image
            alt="html"
            src={HtmlSvg}
            width={80}
            height={80}
            draggable="false"
          />
        </FloatingHtml>

        <FloatingJS>
          <Image
            alt="html"
            src={JsSvg}
            width={100}
            height={100}
            draggable="false"
          />
        </FloatingJS>

        <FloatingCode>
          <Image
            alt="html"
            src={CodeSvg}
            width={200}
            height={200}
            draggable="false"
          />
        </FloatingCode>

        <FloatingDino>
          <Image
            alt="html"
            src={DinoSvg}
            width={200}
            height={200}
            draggable="false"
          />
        </FloatingDino>

        <FloatingNext>
          <Image
            alt="html"
            src={NextSvg}
            width={300}
            height={100}
            draggable="false"
          />
        </FloatingNext>

        <FloatingReact>
          <Image
            alt="html"
            src={ReactSvg}
            width={150}
            height={150}
            draggable="false"
          />
        </FloatingReact>

        <FloatingCSS>
          <Image
            alt="html"
            src={CssSvg}
            width={150}
            height={150}
            draggable="false"
          />
        </FloatingCSS>
      </Title>
    </ContainerHero>
  );
};

export default TitleHero;
