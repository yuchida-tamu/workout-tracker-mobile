import { WorkoutModelType } from '../../models/workout/workout';
import { ActionTypes } from './types';

type CreateNewWorkoutAction = {
  type: ActionTypes.R_CREATE_NEW_WORKOUT;
  payload: {
    workout: WorkoutModelType;
  };
};

export const createNewWorkout = (data: WorkoutModelType): CreateNewWorkoutAction => {
  return {
    type: ActionTypes.R_CREATE_NEW_WORKOUT,
    payload: {
      workout: data,
    },
  };
};

export type WorkoutActions = CreateNewWorkoutAction;
