import React from 'react';
import styled from 'styled-components';
import AnswerItem from './AnswerItem/AnswerItem';

const StyledAnswerList = styled.div`
  .answersList {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const AnswerList = (props) => (
  <StyledAnswerList>
    <ul className="answersList">
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
          />
        );
      })}
    </ul>
  </StyledAnswerList>
);

export default AnswerList;
