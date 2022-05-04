import axios from '../../axios/axios-test';
import {
  FETCH_TEST_SUCCESS,
  FETCH_TESTS_ERROR,
  FETCH_TESTS_START,
  FETCH_TESTS_SUCCESS,
  TEST_SET_STATE,
  FINISH_TEST,
  TEST_NEXT_QUESTION,
  TEST_RETRY,
} from './actionsTypes';

export function fetchTests() {
  return async (dispatch) => {
    dispatch(fetchTestsStart());
    try {
      const response = await axios.get('/tests.json');

      const tests = [];
      Object.keys(response.data).forEach((key, index) => {
        tests.push({
          id: key,
          name: `Module №${index + 1}`,
        });
      });

      dispatch(fetchTestsSuccess(tests));
    } catch (e) {
      dispatch(fetchTestsError(e));
    }
  };
}

export function fetchTestById(testId) {
  return async (dispatch) => {
    dispatch(fetchTestsStart());
    try {
      const response = await axios.get(`/tests/${testId}.json`);
      const test = response.data;
      dispatch(fetchTestSuccess(test));
      this.setState({
        test,
      });
    } catch (e) {
      dispatch(fetchTestsError(e));
    }
  };
}

export function fetchTestSuccess(test) {
  return {
    type: FETCH_TEST_SUCCESS,
    test,
  };
}

export function fetchTestsStart() {
  return {
    type: FETCH_TESTS_START,
  };
}

export function fetchTestsSuccess(tests) {
  return {
    type: FETCH_TESTS_SUCCESS,
    tests,
  };
}

export function fetchTestsError(e) {
  return {
    type: FETCH_TESTS_ERROR,
    error: e,
  };
}

export function testSetState(results, answerState) {
  return {
    type: TEST_SET_STATE,
    answerState,
    results,
  };
}

export function finishTest() {
  return {
    type: FINISH_TEST,
  };
}

export function testNextQuestion(number) {
  return {
    type: TEST_NEXT_QUESTION,
    number,
  };
}

export function retryTest() {
  return {
    type: TEST_RETRY,
  };
}

export function testAnswerClick(answerId) {
  return (dispatch, getState) => {
    const state = getState().test;

    if (state.answerState) {
      const key = Object.keys(state.answerState)[0];
      if (state.answerState[key] === 'success') {
        return;
      }
    }

    const question = state.test[state.activeQuestion];
    const results = state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      dispatch(testSetState({ [answerId]: 'success' }, results));

      const timeout = window.setTimeout(() => {
        if (isModuleFinished(state)) {
          dispatch(finishTest());
        } else {
          dispatch(testNextQuestion(state.activeQuestion + 1));
        }
        window.clearTimeout(timeout);
      }, 50);
    } else {
      results[question.id] = 'error';
      dispatch(testSetState({ [answerId]: 'error' }, results));
    }
  };
}

function isModuleFinished(state) {
  return state.activeQuestion + 1 === state.test.length;
}
