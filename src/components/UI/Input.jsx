import React from 'react';
import styled from 'styled-components';

const StyleInput = styled.div`
  margin-bottom: 15px;

  label {
    margin-bottom: 3px;
    padding: 0px;
    display: block;
    font-weight: bold;
  }

  input {
    display: block;
    box-sizing: border-box;
    border: 1px solid #bebebe;
    padding: 7px;
    margin: 0 0 15px;
    width: 80%;
    outline: none;
    transition: all 300ms ease-in-out;
  }

  span {
    color: #f01f30;
    font-size: 12px;
    font-weight: bold;
  }
`;

const Input = (props) => {
  const inputType = props.type || 'text';
  const htmlFor = `${inputType}-&{Math.random()}`;

  return (
    <StyleInput>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      ></input>
      <span>{props.errorMessage}</span>
    </StyleInput>
  );
};

export default Input;
