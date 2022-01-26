import { WorkoutActions } from '../actions/workout/actions';
import { ActionTypes } from '../actions/workout/types';
import { WorkoutModel, WorkoutModelType } from '../models/workout/workout';
import { mockWorkout } from '../../mock/workout';

export function workoutReducer(
  data: WorkoutModelType[] = mockWorkout.map((item) => WorkoutModel.create(item)),
  action: WorkoutActions,
) {
  switch (action.type) {
  case ActionTypes.R_CREATE_NEW_WORKOUT:
    return WorkoutModel.create(action.payload.workout);
  default:
    return data;
  }
}
