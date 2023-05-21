import { FC, MouseEvent } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { getRoutePath } from '@router/helpers';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const goTo = (path: string) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <Navbar
      collapseOnSelect
      expand={false}
      bg="dark"
      variant="dark"
      className={styles.wrap}
    >
      <Navbar.Brand>Mitra-Soft</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href={getRoutePath('posts')}
            onClick={goTo(getRoutePath('posts'))}
          >
            Posts
          </Nav.Link>
          <Nav.Link
            href={getRoutePath('about')}
            onClick={goTo(getRoutePath('about'))}
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
