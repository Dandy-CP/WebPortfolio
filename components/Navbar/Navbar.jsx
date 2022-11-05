import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  ActiveLink,
  Container,
  ListMenu,
} from '../../styles/Navbar/navbar.styled';

const Navbar = () => {
  const router = useRouter();

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
    </Container>
  );
};

export default Navbar;
