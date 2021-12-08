import { AchievementModel, AchievementType } from './achievement';
import { GoalModel, GoalType } from './goal';

export type UserModelType = {
  username: string;
  iconUrl: string;
  goal: GoalType;
  achievement: AchievementType;
};

const create = (args: Partial<UserModelType> = {}) => {
  return {
    username: '',
    iconUrl: '',
    goal: GoalModel.create(),
    achievement: AchievementModel.create(),
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

export const UserModel = Object.freeze({
  create,
  updateUsername,
  updateIconUrl,
  getNumberOfAchievements,
});
