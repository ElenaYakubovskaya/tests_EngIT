import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMenu = styled.nav`
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #feb8fa;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #71085e;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">
          💁🏻‍♂️
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          💸
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          📩
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};

export default Menu;
