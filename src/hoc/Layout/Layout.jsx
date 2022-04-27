import React from 'react';
import styled from 'styled-components';
import Burger from '../../components/Navigation/Burger';
import Menu from '../../components/Navigation/Menu';
import { Link, Outlet } from 'react-router-dom';
import ModuleTest from '../../containers/ModuleTest/ModuleTest';

const StyledLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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
      <Link to={'/'}>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </Link>
      <div>
        <ModuleTest />
      </div>
    </StyledLayout>
  );
};

export default Layout;
