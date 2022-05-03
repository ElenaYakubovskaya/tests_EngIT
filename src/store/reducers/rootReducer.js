import { combineReducers } from 'redux';
import testReducer from './testList';

export default combineReducers({
  test: testReducer,
});
