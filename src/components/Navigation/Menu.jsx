import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image_cat from '../../images/cat.png';

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
    padding: 25px 50px;
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
    width: 55%;
    height: 10%;
    margin: 0 auto 50px;
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <img alt="IT_cat" src={image_cat} />
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
        to={'auth'}
      >
        <p>Sign in</p>
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => setOpen(!open)}
        to={'creator'}
      >
        <p>Test creator</p>
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => setOpen(!open)}
        to={'/1-4'}
      >
        <p>Module 1-4</p>
      </Link>
    </StyledMenu>
  );
};

export default Menu;
