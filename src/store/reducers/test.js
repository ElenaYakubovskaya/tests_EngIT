import {
  FINISH_TEST,
  TEST_NEXT_QUESTION,
  TEST_SET_STATE,
  FETCH_TESTS_ERROR,
  FETCH_TESTS_START,
  FETCH_TESTS_SUCCESS,
  FETCH_TEST_SUCCESS,
  TEST_RETRY,
} from '../actions/actionsTypes';

const initialState = {
  tests: [],
  loading: false,
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
        loading: true,
      };
    case FETCH_TESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        tests: action.tests,
      };
    case FETCH_TESTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_TEST_SUCCESS:
      return {
        ...state,
        loading: false,
        test: action.test,
      };
    case TEST_SET_STATE:
      return {
        ...state,
        answerState: action.answerState,
        results: action.results,
      };
    case FINISH_TEST:
      return {
        ...state,
        isFinished: true,
      };
    case TEST_NEXT_QUESTION:
      return {
        ...state,
        answerState: null,
        activeQuestion: action.number,
      };
    case TEST_RETRY:
      return {
        ...state,
        activeQuestion: 0,
        answerState: null,
        isFinished: false,
        results: {},
      };
    default:
      return state;
  }
}
