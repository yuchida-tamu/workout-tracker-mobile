import { GoalType } from './goal';

export type AchievementType = {
  achievements: GoalType[];
};

const create = (args: Partial<AchievementType> = {}) => {
  return {
    achievements: [],
    ...args,
  };
};

const getNumberOfAchievements = (data: AchievementType) => {
  return data.achievements.length;
};

const updateAchievements = (data: AchievementType, goal: GoalType) => {
  return create({
    ...data,
    achievements: [...data.achievements, goal],
  });
};

export const AchievementModel = Object.freeze({
  create,
  getNumberOfAchievements,
  updateAchievements,
});
