import React from 'react';
import styled from 'styled-components';

const StyledAnswerItem = styled.li`
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: transparent;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transition: 0.3s ease-in-out;
  }

  &:success {
    background: green;
    color: white;
  }

  &:error {
    background: red;
    color: white;
  }
`;

const AnswerItem = (props) => {
  return (
    <StyledAnswerItem>
      <p onClick={() => props.onAnswerClick(props.answer.id)}>
        {props.answer.text}
      </p>
    </StyledAnswerItem>
  );
};

export default AnswerItem;
