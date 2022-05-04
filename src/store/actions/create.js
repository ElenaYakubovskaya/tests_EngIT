import { CREATE_TEST_QUESTION, RESET_TEST_CREATION } from './actionsTypes';
import axios from '../../axios/axios-test';

export function createTestQuestion(item) {
  return {
    type: CREATE_TEST_QUESTION,
    item,
  };
}

export function resetTestCreation() {
  return {
    type: RESET_TEST_CREATION,
  };
}

export function finishCreateTest() {
  return async (dispatch, getState) => {
    await axios.post('/tests.json', getState().create.test);
    dispatch(resetTestCreation());
  };
}
