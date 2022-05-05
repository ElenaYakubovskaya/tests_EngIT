import React from 'react';
import styled from 'styled-components';

const StyledAnswerItem = styled.li`
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transition: 0.3s ease-in-out;
  }
  background-color: transparent;
`;
const AnswerItem = (props) => {
  return (
    <StyledAnswerItem>
      <p
        success={props.success}
        error={props.error}
        onClick={() => props.onAnswerClick(props.answer.id)}
      >
        {props.answer.text}
      </p>
    </StyledAnswerItem>
  );
};

export default AnswerItem;
