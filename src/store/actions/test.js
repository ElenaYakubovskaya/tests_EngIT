import axios from '../../axios/axios-test';
import {
  FETCH_TEST_SUCCESS,
  FETCH_TESTS_ERROR,
  FETCH_TESTS_START,
  FETCH_TESTS_SUCCESS,
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
