import {
  FETCH_TESTS_ERROR,
  FETCH_TESTS_START,
  FETCH_TESTS_SUCCESS,
  FETCH_TEST_SUCCESS,
} from '../actions/actionsTypes';

const initialState = {
  tests: [],
  error: null,
  results: {},
  isFinished: false,
  activeQuestion: 0,
  answerState: null,
  test: null,
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TESTS_START:
      return {
        ...state,
      };
    case FETCH_TESTS_SUCCESS:
      return {
        ...state,
        tests: action.tests,
      };
    case FETCH_TESTS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case FETCH_TEST_SUCCESS:
      return {
        ...state,
        test: action.test,
      };
    default:
      return state;
  }
}
