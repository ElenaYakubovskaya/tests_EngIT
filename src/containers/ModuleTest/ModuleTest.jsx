import React, { Component } from 'react';
import styled from 'styled-components';
import ActiveTest from '../../components/ActiveTest/ActiveTest';
import FinishedModuleTest from '../../components/ActiveTest/AnswersList/AnswerItem/FinishedModuleTest/FinishedModuleTest';
import axios from '../../axios/axios-test';

const StyledModuleTest = styled.div`
  .wrapper {
    padding-top: 50px;
    box-sizing: border-box;
    background-color: #eccaca36;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
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
    test: [],
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
      isFinished: false,
      results: {},
    });
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `/moduletest/${this.props.match.params.id}.json`
      );
      const test = response.data;
      this.setState({
        test,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <StyledModuleTest>
        <div className="wrapper">
          <div className="title">
            English for IT
            <p>Module tests</p>
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
