import { FC, MouseEvent } from 'react';
import { Card, Nav, Navbar } from 'react-bootstrap';
import { getRoutePath } from '@router/helpers';
import { useNavigate } from 'react-router';
import avatarImg from '@assets/avatar.png';
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
      fixed={'top'}
    >
      <Navbar.Brand>Mitra-Soft</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className={styles.NavbarCollapse}
      >
        <Card className={styles.avatar}>
          <Card.Img src={avatarImg} />
          <Card.Text>Тестовый пользователь</Card.Text>
          <Card.Link>user@mail.ru</Card.Link>
        </Card>
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
