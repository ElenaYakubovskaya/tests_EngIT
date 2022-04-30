import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  display: inline-block;
  padding: 5px 20px;
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #8c8c8c;
  color: black;
  margin-right: 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  background-color: ${(props) =>
    props.bg === '#a11e75' ? '#a11e75' : 'white'};

  &:hover {
    box-shadow: inset 1px 2px 5px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: inset 4px 4px 2px rgba(0, 0, 0, 0.3);
  }
`;

const Button = (props) => {
  return <StyleButton onClick={props.onClick}>{props.children}</StyleButton>;
};

export default Button;
