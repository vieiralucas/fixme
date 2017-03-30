import { combineReducers } from 'redux'
import user from './user';
import issues from './issues';

const rootReducer = combineReducers({
  user,
  issues
});

export default rootReducer
