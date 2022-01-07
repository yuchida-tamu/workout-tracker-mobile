import { ProgramModel, ProgramType } from '../program/program';
import { SchdeuleModel, ScheduleType } from '../program/schedule';
import { AchievementModel, AchievementType } from './achievement';
import { GoalModel, GoalType } from './goal';
import { RecordGroupType } from '../workout/recordGroup';
import { updateProgramProgressById } from './utils/utils';

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

const addNewRecordGroupToProgram = (data: UserModelType, programId: string) => {
  const filtered = data.programs.filter((p) => p.id !== programId);
  const target = data.programs.filter((p) => p.id === programId)[0];
  const updatedProgram = ProgramModel.addNewRecordGroup(target);
  return create({
    ...data,
    programs: [...filtered, updatedProgram],
  });
};

const updateProgramProgress = (
  data: UserModelType,
  progress: RecordGroupType,
  programId: string,
) => {
  const updatedPrograms = data.programs.map((program) =>
    updateProgramProgressById(program, programId, progress),
  );

  return create({ ...data, programs: updatedPrograms });
};

export const UserModel = Object.freeze({
  create,
  updateUsername,
  updateIconUrl,
  getNumberOfAchievements,
  updateProgramSchedule,
  addProgram,
  deleteProgram,
  addNewRecordGroupToProgram,
  updateProgramProgress,
});
