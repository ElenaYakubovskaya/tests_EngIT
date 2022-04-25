import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  .layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

class Layout extends Component {
  render() {
    return (
      <StyledLayout>
        <div className="layout">
          <main className="main">{this.props.children}</main>
        </div>
      </StyledLayout>
    );
  }
}

export default Layout;
