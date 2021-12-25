import { ProgramModel, ProgramType } from '../program/program';
import { SchdeuleModel, ScheduleType } from '../program/schedule';
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

export const UserModel = Object.freeze({
  create,
  updateUsername,
  updateIconUrl,
  getNumberOfAchievements,
  updateProgramSchedule,
  addProgram,
});
