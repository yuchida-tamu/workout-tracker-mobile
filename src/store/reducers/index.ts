import { userReducer } from './userReducer';
import { combineReducers } from 'redux';
import { programReducer } from './programReducer';
import { appReducer } from './appReducer';
import { workoutReducer } from './workoutReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  program: programReducer,
  workout: workoutReducer,
  app: appReducer,
});
