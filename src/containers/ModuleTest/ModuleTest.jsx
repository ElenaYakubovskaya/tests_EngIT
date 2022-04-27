import React, { Component } from 'react';
import styled from 'styled-components';
import ActiveTest from '../../components/ActiveTest/ActiveTest';

import FinishedModuleTest from '../../components/ActiveTest/AnswersList/AnswerItem/FinishedModuleTest/FinishedModuleTest';

const StyledModuleTest = styled.div`
  .wrapper {
    padding-top: 50px;
    box-sizing: border-box;
    background-color: #eccaca36;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: linear-gradient(90deg, #922e83 0%, #eccaca 100%);
    flex-grow: initial;
  }

  .title {
    padding-top: 40px;
    color: #fff;
    margin-left: 20px;
    font-size: 1.8em;
  }
`;

class ModuleTest extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    test: [
      {
        question: ' He ________ at work',
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: '-', id: 1 },
          { text: 'Is', id: 2 },
          { text: 'Are', id: 3 },
        ],
      },
      {
        question: 'What _______ your hobbies?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: 'Is', id: 1 },
          { text: '-', id: 2 },
          { text: 'Are', id: 3 },
        ],
      },

      {
        question: ' I have a lot of _______',
        rightAnswerId: 1,
        id: 3,
        answers: [
          { text: 'Work', id: 1 },
          { text: 'Workes', id: 2 },
          { text: 'Works', id: 3 },
        ],
      },
      {
        question: ' I have ______ new phone',
        rightAnswerId: 1,
        id: 4,
        answers: [
          { text: 'A', id: 1 },
          { text: 'There', id: 2 },
          { text: '-', id: 3 },
        ],
      },
      {
        question: 'Do you have ______ question?',
        rightAnswerId: 3,
        id: 5,
        answers: [
          { text: 'Other', id: 1 },
          { text: 'The other', id: 2 },
          { text: 'Another', id: 3 },
        ],
      },
      {
        question: ' __________ an office nearby?',
        rightAnswerId: 3,
        id: 6,
        answers: [
          { text: 'There is', id: 1 },
          { text: 'Does', id: 2 },
          { text: 'Is there', id: 3 },
        ],
      },
      {
        question: 'Choose the correct sentence',
        rightAnswerId: 1,
        id: 7,
        answers: [
          { text: 'There are two people in the room', id: 1 },
          { text: 'In the room are two people', id: 2 },
          { text: 'There two people are in the room', id: 3 },
        ],
      },
      {
        question: ' ________ he work on Sundays?',
        rightAnswerId: 3,
        id: 8,
        answers: [
          { text: 'Is', id: 1 },
          { text: 'Do', id: 2 },
          { text: 'Does', id: 3 },
        ],
      },
      {
        question: 'Choose the correct sentence',
        rightAnswerId: 1,
        id: 9,
        answers: [
          { text: 'We don’t know what happened on Wednesday', id: 1 },
          { text: 'We not know what happened on Wednesday', id: 2 },
          { text: 'We doesn’t know what happened in Wednesday', id: 3 },
        ],
      },
      {
        question: 'Choose the correct sentence',
        rightAnswerId: 3,
        id: 10,
        answers: [
          { text: 'Does she comes to the office at 10 am?', id: 1 },
          { text: 'She coming to the office on 10 am?', id: 2 },
          { text: ' Does she come to the office at 10 am?', id: 3 },
        ],
      },
      {
        question: 'The opposite of “shy” is:',
        rightAnswerId: 2,
        id: 11,
        answers: [
          { text: 'Introverted', id: 1 },
          { text: 'Outgoing', id: 2 },
          { text: 'Hardworking', id: 3 },
        ],
      },
      {
        question:
          'You can use your phone to order lunch. All you need to do is __________',
        rightAnswerId: 3,
        id: 12,
        answers: [
          { text: 'Do an order', id: 1 },
          { text: 'Take an order', id: 2 },
          { text: 'Place an order', id: 3 },
        ],
      },
      {
        question: 'Which of the following is a form of payment?',
        rightAnswerId: 2,
        id: 13,
        answers: [
          { text: 'Cuisine', id: 1 },
          { text: 'Fee', id: 2 },
          { text: 'Convenience', id: 3 },
        ],
      },
      {
        question: 'This desk _________ too much space!',
        rightAnswerId: 3,
        id: 14,
        answers: [
          { text: 'Uses', id: 1 },
          { text: 'Gets up', id: 2 },
          { text: 'Takes up', id: 3 },
        ],
      },
      {
        question: 'Which of the following is a synonym for “important”?',
        rightAnswerId: 3,
        id: 15,
        answers: [
          { text: 'Distracting', id: 1 },
          { text: 'Busy', id: 2 },
          { text: 'Essential', id: 3 },
        ],
      },
      {
        question: 'I like to ________ my headphones in my desk all the time',
        rightAnswerId: 2,
        id: 16,
        answers: [
          { text: 'Put', id: 1 },
          { text: 'Keep', id: 2 },
          { text: 'Hold', id: 3 },
        ],
      },
      {
        question: 'You are responsible _____ this feature',
        rightAnswerId: 3,
        id: 17,
        answers: [
          { text: 'To', id: 1 },
          { text: 'Of', id: 2 },
          { text: 'For', id: 3 },
        ],
      },
      {
        question: 'This software will help us _______ money',
        rightAnswerId: 1,
        id: 18,
        answers: [
          { text: 'Save', id: 1 },
          { text: 'Keep', id: 2 },
          { text: 'Economize', id: 3 },
        ],
      },
      {
        question: 'Hey, let’s ______ some lunch after work',
        rightAnswerId: 2,
        id: 19,
        answers: [
          { text: 'Take', id: 1 },
          { text: 'Grab', id: 2 },
          { text: 'Keep', id: 3 },
        ],
      },

      {
        question: `Create synonym pairs:
          1. Wrap up     a. Achieve
          2. Elaborate   b. Explain in more detail
          3. Go over     c. Spend time with someone
          4. Hang out    d. Finish
          5. Accomplish  e. Discuss`,
        rightAnswerId: 1,
        id: 20,
        answers: [
          { text: '1-d, 2-b, 3-e, 4-c, 5-a', id: 1 },
          { text: '1-a, 2-d, 3-b, 4-c, 5-e', id: 2 },
          { text: '1-d, 2-a, 3-e, 4-c, 5-b', id: 3 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question = this.state.test[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      });

      const timeout = window.setTimeout(() => {
        if (this.isModuleFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 50);
    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: { [answerId]: 'error' },
        results,
      });
    }
  };

  isModuleFinished() {
    return this.state.activeQuestion + 1 === this.state.test.length;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      results: {},
      isFinished: false,
    });
  };

  render() {
    return (
      <StyledModuleTest>
        <div className="wrapper">
          <div className="title">
            English for IT<p>Module tests</p>
            {this.state.isFinished ? (
              <FinishedModuleTest
                results={this.state.results}
                test={this.state.test}
                onRetry={this.retryHandler}
              />
            ) : (
              <ActiveTest
                answers={this.state.test[this.state.activeQuestion].answers}
                question={this.state.test[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                testLength={this.state.test.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
            )}
          </div>
        </div>
      </StyledModuleTest>
    );
  }
}

export default ModuleTest;
