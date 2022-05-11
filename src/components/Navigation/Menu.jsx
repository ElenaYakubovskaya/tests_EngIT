import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image_cat from '../../images/cat.png';
import Backdrop from '../UI/Backdrop';

const StyledMenu = styled.nav`
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f4c1e8;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  p {
    padding: 25px 40px;
    text-transform: uppercase;
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.7rem;
    &:hover {
      color: #6a016a;
      text-decoration: underline;
    }
  }

  img {
    width: 35%;
    height: 7%;
    margin: 0 auto 50px;
  }
`;

const Menu = ({ open, setOpen, isAuthenticated }) => {
  return (
    <>
      <StyledMenu open={open}>
        <img alt="IT_cat" src={image_cat} />
        <Link
          style={{
            textDecoration: 'none',
            display: isAuthenticated ? 'none' : null,
          }}
          onClick={() => setOpen(!open)}
          to={'auth'}
        >
          <p>Log in</p>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          onClick={() => setOpen(!open)}
          to={'/'}
        >
          <p>Test List</p>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          onClick={() => setOpen(!open)}
          to={'creating'}
        >
          <p>Creating tests</p>
        </Link>
        <Link
          style={{
            textDecoration: 'none',
            display: !isAuthenticated ? 'none' : null,
          }}
          onClick={() => setOpen(!open)}
          to={'logout'}
        >
          <p>Exit</p>
        </Link>
      </StyledMenu>
      {open ? <Backdrop onClick={() => setOpen(!open)} /> : null}
    </>
  );
};

export default Menu;
