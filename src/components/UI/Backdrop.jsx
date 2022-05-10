import React from 'react';
import styled from 'styled-components';

const StyleBackdrop = styled.div`
  z-index: 49;
  background: rgba(96, 16, 83, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Backdrop = (props) => <StyleBackdrop onClick={props.onClick} />;

export default Backdrop;
