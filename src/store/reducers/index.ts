import { userReducer } from './userReducer';
import { combineReducers } from 'redux';
import { programReducer } from './programReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  program: programReducer,
});
