import React from 'react';
import styled, { css } from 'styled-components';

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

  &:hover {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: inset 4px 4px 2px rgba(0, 0, 0, 0.3);
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: red;
      backgroundcolor: #ff0404;
    `}
`;

const Button = (props) => {
  return <StyleButton onClick={props.onClick}>{props.children}</StyleButton>;
};

export default Button;
