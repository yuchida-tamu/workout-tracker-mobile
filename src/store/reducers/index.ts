import { userReducer } from './userReducer';
import { combineReducers } from 'redux';
import { programReducer } from './programReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  program: programReducer,
  app: appReducer,
});
