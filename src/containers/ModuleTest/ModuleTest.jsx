import React, { Component } from 'react';
import styled from 'styled-components';
import ActiveTest from '../../components/ActiveTest/ActiveTest';
import FinishedModuleTest from '../../components/ActiveTest/AnswersList/AnswerItem/FinishedModuleTest/FinishedModuleTest';

import { fetchTestById } from '../../store/actions/test';
import { connect } from 'react-redux';

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
    this.props.fetchTestById(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return (
      <StyledModuleTest>
        <div className="wrapper">
          <div className="title">
            English for IT
            <p>Module tests</p>
            {this.props.isFinished ? (
              <FinishedModuleTest
                results={this.props.results}
                test={this.props.test}
                onRetry={this.retryHandler}
              />
            ) : (
              <ActiveTest
                answers={this.props.test[this.props.activeQuestion].answers}
                question={this.props.test[this.props.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                testLength={this.props.test.length}
                answerNumber={this.props.activeQuestion + 1}
                state={this.props.answerState}
              />
            )}
          </div>
        </div>
      </StyledModuleTest>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.test.results,
    isFinished: state.test.isFinished,
    activeQuestion: state.test.activeQuestion,
    answerState: state.test.answerState,
    test: state.test.test,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTestById: (id) => dispatch(fetchTestById(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleTest);
