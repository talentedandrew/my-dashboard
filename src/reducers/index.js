import { combineReducers } from 'redux';
import runtime from './runtime';
import topBarContent from './common/topbar';

export default combineReducers({
  runtime,
  topBarContent,
});
