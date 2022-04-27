import React from 'react';
import styled from 'styled-components';
import Burger from '../../components/Navigation/Burger';
import Menu from '../../components/Navigation/Menu';

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
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />

        <main>тут должен быть moduletest</main>
      </div>
    </StyledLayout>
  );
};

export default Layout;
