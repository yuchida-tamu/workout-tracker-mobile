import { WorkoutModelType } from '../../models/workout/workout';
import { RootState } from '../../store';

export const workoutListSelector = (state: RootState): WorkoutModelType[] => state.workout;
