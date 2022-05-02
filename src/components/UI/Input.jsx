import React from 'react';
import styled from 'styled-components';

const StyleInput = styled.div`
  margin-bottom: 15px;

  label {
    margin-bottom: 3px;
    padding: 0;
    display: block;
    font-weight: bold;
    color: #6a0b4d;
  }

  input {
    font-size: 1.2em;
    display: block;
    box-sizing: border-box;
    border: 1px solid #bebebe;

    margin: 5px 0 0;
    width: 100%;
    outline: none;
    transition: all 300ms ease-in-out;
  }

  span {
    color: #f01f30;
    font-size: 12px;
    font-weight: bold;
  }
`;

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = (props) => {
  const inputType = props.type || 'text';
  const htmlFor = `${inputType}-${Math.random()}`;

  return (
    <StyleInput>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      ></input>
      {isInvalid(props) ? (
        <span>{props.errorMessage || 'enter valid value'}</span>
      ) : null}
    </StyleInput>
  );
};

export default Input;
