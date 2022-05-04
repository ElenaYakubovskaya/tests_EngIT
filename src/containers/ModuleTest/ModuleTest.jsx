import React, { Component } from 'react';
import styled from 'styled-components';
import ActiveTest from '../../components/ActiveTest/ActiveTest';
import FinishedModuleTest from '../../components/ActiveTest/AnswersList/AnswerItem/FinishedModuleTest/FinishedModuleTest';

import {
  fetchTestById,
  testAnswerClick,
  retryTest,
} from '../../store/actions/test';
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

  &:success {
    color: #ffffff8e;
    background: #12b232;
  }

  &:error {
    color: #ffffff8e;
    background: #d12a2a;
  }
`;

class ModuleTest extends Component {
  componentDidMount() {
    this.props.fetchTestById(this.props.params.id);
  }
  componentWillUnmount() {
    this.props.retryTest();
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
                onRetry={this.props.retryTest}
              />
            ) : (
              <ActiveTest
                answers={this.props.test[this.props.activeQuestion].answers}
                question={this.props.test[this.props.activeQuestion].question}
                onAnswerClick={this.props.testAnswerClick}
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
    testAnswerClick: (answerId) => dispatch(testAnswerClick(answerId)),
    retryTest: () => dispatch(retryTest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleTest);
