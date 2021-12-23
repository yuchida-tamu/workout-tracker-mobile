import { SchdeuleModel, ScheduleType } from './schedule';
import { WorkoutModelType } from '../workout/workout';
import { Category } from '../../../enums/categories';

export type ProgramType = {
  id: string;
  name: string;
  ownerId: string;
  workoutList: WorkoutModelType[];
  schedule: ScheduleType;
  category: Category;
};

const create = (args: Partial<ProgramType> = {}) => {
  return {
    id: `program=${Math.random()}`,
    name: '',
    ownerId: '',
    workoutList: [],
    schedule: SchdeuleModel.create(),
    category: Category.Default,
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
