import React from 'react';
import styled from 'styled-components';
import Burger from '../../components/Navigation/Burger';
import Menu from '../../components/Navigation/Menu';
import { Outlet } from 'react-router-dom';

const StyledLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(90deg, #922e83 0%, #eccaca 100%);

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  return (
    <StyledLayout>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <div>
        <Outlet />
      </div>
    </StyledLayout>
  );
};

export default Layout;
