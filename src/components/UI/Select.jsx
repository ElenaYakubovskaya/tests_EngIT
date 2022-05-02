import React from 'react';
import styled from 'styled-components';

const StyleSelect = styled.div`
  margin-bottom: 15px;

  label {
    margin: 0 0 3px 0;
    padding: 0;
    font-weight: bold;
    display: block;
  }

  select {
    display: block;
    box-sizing: border-box;
    border: 1px solid #bebebe;
    margin: 0 0 5px;
    height: 30px;
    width: 100%;
    outline: none;
    transition: all 300ms ease-in-out;
  }
`;

const Select = (props) => {
  const htmlFor = `${props.label}-${Math.random()}`;

  return (
    <StyleSelect>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select id={htmlFor} value={props.value} onChange={props.onChange}>
        {props.options.map((option, index) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </StyleSelect>
  );
};

export default Select;
