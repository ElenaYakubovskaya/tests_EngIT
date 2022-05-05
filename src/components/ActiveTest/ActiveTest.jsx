import React from 'react';
import styled from 'styled-components';
import AnswerList from './AnswersList/AnswersList';

const StyledActiveTest = styled.div`
  .activeTest {
    display: block;
    box-sizing: border-box;
    padding: 20px;
    color: white;
    border: 2px solid #fff;
    border-radius: 5px;
    margin: 0 10px;
    width: 700px;
    height: auto;
    margin: 70px auto;
  }

  .question {
    display: flex;
    justify-content: space-between;
    font-size: 1em;
    margin-bottom: 50px;
  }

  .number {
    font-size: 1em;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .flex-secondBlock {
    margin-left: 10px;
  }
`;

const ActiveTest = (props) => {
  return (
    <StyledActiveTest>
      <div className="activeTest">
        <div className="flex">
          <div className="flex-firstBlock">
            <p className="question">
              <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
              </span>
            </p>
          </div>
          <div className="flex-secondBlock">
            <small className="number">
              {props.answerNumber}/{props.testLength}
            </small>
          </div>
        </div>
        <AnswerList
          success={props.success}
          error={props.error}
          state={props.state}
          answers={props.answers}
          onAnswerClick={props.onAnswerClick}
        />
      </div>
    </StyledActiveTest>
  );
};

export default ActiveTest;
