import { useState } from 'react';
import { stack as Menu } from 'react-burger-menu';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import HamburgerIcon from '../../public/images/Icon/MobileHamburger.svg';
import {
  ActiveLink,
  Container,
  HamburgerMenu,
  ListMenu,
  ListMenuMobile,
} from '../../styles/Navbar/navbar.styled';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  const styles = {
    bmBurgerButton: {
      position: 'relative',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: 'white',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: '0',
    },
    bmMenu: {
      background: '#050f25',
      padding: '5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: 'white',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Container>
      <h3>
        <Link href="/">Dandy Candra</Link>
      </h3>
      <ListMenu>
        <li>
          <Link href="/" passHref>
            <ActiveLink pathName={router.pathname}>Home</ActiveLink>
          </Link>
        </li>
        <li>
          <Link href="/Myprojects" passHref>
            <ActiveLink pathName={router.pathname}>Project</ActiveLink>
          </Link>
        </li>
        <li>
          <Link href="/Blog" passHref>
            <ActiveLink pathName={router.pathname}>Blog</ActiveLink>
          </Link>
        </li>
      </ListMenu>

      <HamburgerMenu>
        <Menu
          styles={styles}
          customBurgerIcon={
            <Image src={HamburgerIcon} alt="Menu" width={35} height={30} />
          }
          width={250}
          isOpen={isOpen}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
          noOverlay
          right
        >
          <ListMenuMobile>
            <li>
              <Link href="/" passHref>
                <ActiveLink onClick={closeSideBar} pathName={router.pathname}>
                  Home
                </ActiveLink>
              </Link>
            </li>
            <li>
              <Link href="/Myprojects" passHref>
                <ActiveLink onClick={closeSideBar} pathName={router.pathname}>
                  Project
                </ActiveLink>
              </Link>
            </li>
            <li>
              <Link href="/Blog" passHref>
                <ActiveLink onClick={closeSideBar} pathName={router.pathname}>
                  Blog
                </ActiveLink>
              </Link>
            </li>
          </ListMenuMobile>
        </Menu>
      </HamburgerMenu>
    </Container>
  );
};

export default Navbar;
