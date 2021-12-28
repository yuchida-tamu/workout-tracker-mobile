import { SchdeuleModel, ScheduleType } from './schedule';
import { WorkoutModelType } from '../workout/workout';
import { Category } from '../../../enums/categories';
import {
  RecordGroupType,
  RecordGroupModel,
  cerateRecordGroup,
  addRecordToGroup,
} from '../workout/recordGroup';
import { RecordHolderModel, RecordHolderType } from '../workout/recordHolder';
import { RecordType } from '../workout/record';

export type ProgramType = {
  id: string;
  name: string;
  ownerId: string;
  workoutList: WorkoutModelType[];
  schedule: ScheduleType;
  category: Category;
  progressList: RecordGroupType[];
};

const create = (args: Partial<ProgramType> = {}) => {
  return {
    id: `program=${Math.random()}`,
    name: '',
    ownerId: '',
    workoutList: [],
    schedule: SchdeuleModel.create(),
    category: Category.Default,
    progressList: new Array<RecordGroupType>(),
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

const addNewRecordGroup = (data: ProgramType) => {
  return create({
    ...data,
    progressList: [
      ...data.progressList,
      RecordGroupModel.cerateRecordGroup({ id: `rg_${Math.random()}` }),
    ],
  });
};

const updateRecordMap = (data: ProgramType, record: RecordType, groupId: string): ProgramType => {
  const group = data.progressList.filter((g) => g.id === groupId);
  if (group.length < 1)
    return create({
      ...data,
      progressList: [
        cerateRecordGroup({ recordHolders: [RecordHolderModel.create({ records: [record] })] }),
      ],
    });
  const updatedGroup = addRecordToGroup(group[0], record);
  return create({ ...data, progressList: [...data.progressList, updatedGroup] });
};

export const ProgramModel = Object.freeze({
  create,
  updateName,
  updateWorkoutList,
  updateSchedule,
  updateRecordMap,
  addNewRecordGroup,
});
