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

  .header {
    color: #ffffff;
    font-size: 24px;
    font-family: cursive;
    text-align: center;
    padding: 10px;
  }
  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const Layout = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <StyledLayout>
      <div className="header">
        English for IT
        <Burger open={open} setOpen={setOpen} />
        <Menu
          isAuthenticated={props.isAuthenticated}
          open={open}
          setOpen={setOpen}
        />
      </div>
      <div>
        <Outlet />
      </div>{' '}
    </StyledLayout>
  );
};

export default Layout;
