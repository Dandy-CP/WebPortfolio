import Image from 'next/image';
import {
  ButtonCV,
  ContainerIntro,
  DescIntro,
} from '../../styles/Homepage/introduction.styled';
import MySelf from '../../public/MySelf.png';
import Sprinkle from '../../public/images/Doodle/sprinkle.svg';

const Introduction = () => {
  return (
    <ContainerIntro>
      <Image
        alt="MySelf"
        src={MySelf}
        width={450}
        height={500}
        draggable="false"
      />

      <DescIntro>
        <Image alt="sprinkle" src={Sprinkle} width={50} draggable="false" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio eius
          unde accusamus ipsum eligendi, dolorum id. Eveniet quod quia dolores.
          Nobis corporis iure iste beatae totam voluptate ea eveniet ex
          repellat, assumenda optio eaque quidem aut at et velit reiciendis?
          Animi ipsa, ratione ipsum modi cum consequuntur excepturi voluptatem
          nobis iure inventore qui distinctio quam sint consectetur voluptas
          sunt culpa aliquam quibusdam reiciendis. Nihil autem hic in? Vitae
          molestias exercitationem facilis incidunt eveniet minus, similique
          accusantium quo fugiat impedit perferendis nam tempora ipsa laborum
          dolorum doloribus voluptatum vero repudiandae. Animi repudiandae sint
          possimus necessitatibus nesciunt ipsa officia aspernatur architecto
          ullam!
        </p>
        <ButtonCV>See My CV</ButtonCV>
      </DescIntro>
    </ContainerIntro>
  );
};

export default Introduction;
