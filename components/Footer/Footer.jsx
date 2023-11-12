import Image from 'next/image';
import Link from 'next/link';

import NextJSLogo from '../../public/images/Icon/NextJS.svg';
import ReactJSLogo from '../../public/images/Icon/ReactJS.svg';
import StyledLogo from '../../public/images/Icon/StyledComponents.svg';
import GithubLogo from '../../public/images/Icon/github-f.svg';
import GithubLight from '../../public/images/Icon/github.svg';
import LinkedinLogo from '../../public/images/Icon/linkedin-f.svg';
import EmailLogo from '../../public/images/Icon/mail-f.svg';
import SupabaseLogo from '../../public/images/Icon/supabase.svg';
import {
  ButtonCvNCertif,
  Container,
  ContainerMade,
  CvAndCertif,
  CvNCertifMobile,
  HeadingFooter,
  List,
  ListMenu,
  ListPage,
  Logo,
  LogoReact,
  LogoStack,
  MadeWith,
  Menu,
  PagesMenu,
  SocialMedia,
  SourceButton,
  SourceGithub,
} from '../../styles/Footer/footer.styled';

const Footer = () => {
  return (
    <Container>
      <Menu>
        <PagesMenu>
          <HeadingFooter>
            <h3>PAGES</h3>
          </HeadingFooter>
          <ListPage>
            <Link href="/">
              <li>Home</li>
            </Link>

            <Link href="/myprojects">
              <li>Project</li>
            </Link>

            <Link href="/Blog">
              <li>Blog</li>
            </Link>
          </ListPage>
        </PagesMenu>

        <SocialMedia>
          <HeadingFooter>
            <h3>SOCIAL</h3>
          </HeadingFooter>
          <ListMenu>
            <a
              href="https://github.com/Dandy-CP"
              target="_blank"
              rel="noreferrer"
            >
              <List>
                <Image src={GithubLogo} alt="GithubLogo" width={25} />
                <li>Github</li>
              </List>
            </a>

            <a
              href="https://www.linkedin.com/in/dandycandra/"
              target="_blank"
              rel="noreferrer"
            >
              <List>
                <Image src={LinkedinLogo} alt="LinkedinLogo" width={25} />
                <li>Linkedin</li>
              </List>
            </a>

            <a href="mailto:dandycandrapratama@gmail.com">
              <List>
                <Image src={EmailLogo} alt="EmailLogo" width={25} />
                <li>Email</li>
              </List>
            </a>
          </ListMenu>
        </SocialMedia>

        <CvAndCertif>
          <HeadingFooter>
            <h3>SEE MY KNOWLEDGE</h3>
          </HeadingFooter>
          <a
            href="https://eyuajzwbnswumrcuzjrd.supabase.co/storage/v1/object/public/certificate/Resume%20Dandy%20Candra%20Pratama.pdf?t=2023-10-01T07%3A38%3A50.788Z"
            target="_blank"
            rel="noreferrer"
          >
            <ButtonCvNCertif>My Resume</ButtonCvNCertif>
          </a>

          <Link href="/certificate">
            <ButtonCvNCertif>Certificate</ButtonCvNCertif>
          </Link>
        </CvAndCertif>
      </Menu>

      <CvNCertifMobile>
        <HeadingFooter>
          <h3>SEE MY KNOWLEDGE</h3>
        </HeadingFooter>
        <ButtonCvNCertif>Curiculum Vitae</ButtonCvNCertif>
        <Link href="/Certificate">
          <ButtonCvNCertif>Certificate</ButtonCvNCertif>
        </Link>
      </CvNCertifMobile>

      <ContainerMade>
        <MadeWith>
          <LogoStack>
            <h3>MADE WITH</h3>
            <Logo>
              <Image
                src={NextJSLogo}
                alt="NextJS"
                width={45}
                height={50}
                draggable="false"
              />
            </Logo>
            <LogoReact>
              <Image
                src={ReactJSLogo}
                alt="ReactJS"
                width={25}
                height={35}
                draggable="false"
              />
            </LogoReact>
            <Logo>
              <Image
                src={StyledLogo}
                alt="Styled"
                width={45}
                height={60}
                draggable="false"
              />
            </Logo>
            <Logo>
              <Image
                src={SupabaseLogo}
                alt="Styled"
                width={25}
                height={30}
                draggable="false"
              />
            </Logo>
          </LogoStack>
          <p>
            UI and Design inspired by
            <a href="https://github.com/BraydenTW/braydentw.io">
              Brayden Wright.
            </a>
          </p>
          <p>
            Made and Coded by
            <a href="https://github.com/Dandy-CP">Dandy Candra</a> . All rights
            reserved.
          </p>
        </MadeWith>
        <SourceGithub>
          <a
            href="https://github.com/Dandy-CP/WebPortfolio"
            target="_blank"
            rel="noreferrer"
          >
            <SourceButton>
              <Image src={GithubLight} alt="GithubLogo" width={25} />
              View Source Code
            </SourceButton>
          </a>
        </SourceGithub>
      </ContainerMade>
    </Container>
  );
};

export default Footer;
