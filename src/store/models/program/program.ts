import { SchdeuleModel, ScheduleType } from './schedule';
import { WorkoutModelType } from '../workout/workout';

export type ProgramType = {
  id: string;
  name: string;
  ownerId: string;
  workoutList: WorkoutModelType[];
  schedule: ScheduleType;
};

const create = (args: Partial<ProgramType> = {}) => {
  return {
    id: `program=${Math.random()}`,
    name: '',
    ownerId: '',
    workoutList: [],
    schedule: SchdeuleModel.create(),
    ...args,
  };
};

const updateName = (data: ProgramType, name: string) => {
  return { ...data, name };
};

const updateWorkoutList = (data: ProgramType, workoutList: WorkoutModelType[]) => {
  return { ...data, workoutList };
};

const updateSchedule = (data: ProgramType, schedule: ScheduleType) => {
  return { ...data, schedule };
};

export const ProgramModel = Object.freeze({
  create,
  updateName,
  updateWorkoutList,
  updateSchedule,
});
