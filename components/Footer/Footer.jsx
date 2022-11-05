import Image from 'next/image';
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

import NextJSLogo from '../../public/images/Icon/NextJS.svg';
import ReactJSLogo from '../../public/images/Icon/ReactJS.svg';
import StyledLogo from '../../public/images/Icon/StyledComponents.svg';
import SupabaseLogo from '../../public/images/Icon/supabase.svg';
import GithubLogo from '../../public/images/Icon/github-f.svg';
import GithubLight from '../../public/images/Icon/github.svg';
import LinkedinLogo from '../../public/images/Icon/linkedin-f.svg';
import EmailLogo from '../../public/images/Icon/mail-f.svg';

const Footer = () => {
  return (
    <Container>
      <Menu>
        <PagesMenu>
          <HeadingFooter>
            <h3>PAGES</h3>
          </HeadingFooter>
          <ListPage>
            <li>Home</li>
            <li>Project</li>
            <li>Blog</li>
          </ListPage>
        </PagesMenu>

        <SocialMedia>
          <HeadingFooter>
            <h3>SOCIAL</h3>
          </HeadingFooter>
          <ListMenu>
            <List>
              <Image src={GithubLogo} alt="GithubLogo" width={25} />
              <li>Github</li>
            </List>
            <List>
              <Image src={LinkedinLogo} alt="LinkedinLogo" width={25} />
              <li>Linkedin</li>
            </List>
            <List>
              <Image src={EmailLogo} alt="EmailLogo" width={25} />
              <li>Email</li>
            </List>
          </ListMenu>
        </SocialMedia>

        <CvAndCertif>
          <HeadingFooter>
            <h3>SEE MY KNOWLEDGE</h3>
          </HeadingFooter>
          <ButtonCvNCertif>Curiculum Vitae</ButtonCvNCertif>
          <ButtonCvNCertif>Certificate</ButtonCvNCertif>
        </CvAndCertif>
      </Menu>

      <CvNCertifMobile>
        <HeadingFooter>
          <h3>SEE MY KNOWLEDGE</h3>
        </HeadingFooter>
        <ButtonCvNCertif>Curiculum Vitae</ButtonCvNCertif>
        <ButtonCvNCertif>Certificate</ButtonCvNCertif>
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
          <p>UI and Design inspired by Brayden Wright.</p>
          <p>Made and Coded by Dandy Candra. All rights reserved.</p>
        </MadeWith>
        <SourceGithub>
          <SourceButton>
            <Image src={GithubLight} alt="GithubLogo" width={25} />
            View Source Code
          </SourceButton>
        </SourceGithub>
      </ContainerMade>
    </Container>
  );
};

export default Footer;
