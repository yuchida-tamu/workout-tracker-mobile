import { updateRecord } from '../../actions/program/actions';
import { ProgramModel, ProgramType } from '../program/program';
import { SchdeuleModel, ScheduleType } from '../program/schedule';
import { RecordType } from '../workout/record';
import { RecordHolderType } from '../workout/recordHolder';
import { AchievementModel, AchievementType } from './achievement';
import { GoalModel, GoalType } from './goal';

export type UserModelType = {
  username: string;
  iconUrl: string;
  goal: GoalType;
  achievement: AchievementType;
  programs: ProgramType[];
};

const create = (args: Partial<UserModelType> = {}) => {
  return {
    username: '',
    iconUrl: '',
    goal: GoalModel.create(),
    achievement: AchievementModel.create(),
    programs: [],
    ...args,
  };
};

const updateUsername = (data: UserModelType, username: string) => {
  return create({ ...data, username });
};

const updateIconUrl = (data: UserModelType, iconUrl: string) => {
  return create({ ...data, iconUrl });
};

const getNumberOfAchievements = (data: UserModelType) => {
  return AchievementModel.getNumberOfAchievements(data.achievement);
};

const updateProgramSchedule = (data: UserModelType, programId: string, schedule: ScheduleType) => {
  const programs = data.programs.map((p) => {
    if (p.id === programId) {
      return ProgramModel.create({
        ...p,
        schedule: SchdeuleModel.create({ ...schedule }),
      });
    }
    return p;
  });

  return create({ ...data, programs });
};

const addProgram = (data: UserModelType, program: ProgramType) => {
  const programs = [...data.programs, program];
  return create({ ...data, programs });
};

const deleteProgram = (data: UserModelType, programId: string) => {
  const programs = data.programs.filter((program) => program.id !== programId);
  return create({
    ...data,
    programs,
  });
};

const addRecordToProgram = (
  data: UserModelType,
  record: RecordType,
  programId: string,
  groupId: string,
) => {
  const target = data.programs.filter((p) => p.id === programId);
  if (target.length < 1) return create();
  const updated = ProgramModel.updateRecordMap(target[0], record, groupId);
  const filtered = data.programs.filter((p) => p.id !== programId);
  const programs: ProgramType[] = [...filtered, updated];
  return create({ ...data, programs });
};

const addNewRecordGroupToProgram = (data: UserModelType, programId: string) => {
  const filtered = data.programs.filter((p) => p.id !== programId);
  const target = data.programs.filter((p) => p.id === programId)[0];
  const updatedProgram = ProgramModel.addNewRecordGroup(target);
  return create({
    ...data,
    programs: [...filtered, updatedProgram],
  });
};

export const UserModel = Object.freeze({
  create,
  updateUsername,
  updateIconUrl,
  getNumberOfAchievements,
  updateProgramSchedule,
  addProgram,
  deleteProgram,
  addRecordToProgram,
  addNewRecordGroupToProgram,
});
