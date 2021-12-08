export type GoalType = {
  goal: number | string;
};

const create = (args: Partial<GoalType> = {}) => {
  return {
    goal: '',
    ...args,
  };
};

const updateGoal = (data: GoalType, goal: string | number) => {
  return create({ ...data, goal });
};

export const GoalModel = Object.freeze({
  create,
  updateGoal,
});
