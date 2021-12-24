export type ScheduleType = {
  isRepeated: boolean;
  days: boolean[]; //its length is 7, each corresponds with the days of a week
  numberOfRepeat: number;
};

const create = (args: Partial<ScheduleType> = {}) => {
  return {
    isRepeated: false,
    days: [false, true, false, false, false, false, false],
    numberOfRepeat: 0,
    ...args,
  };
};

const updateIsRepeated = (data: ScheduleType, isRepeated: boolean) => {
  return {
    ...data,
    isRepeated,
  };
};

const updateDays = (data: ScheduleType, days: boolean[]) => {
  return {
    ...data,
    days,
  };
};

const updateNumberOfRepeat = (data: ScheduleType, numberOfRepeat: number) => {
  return {
    ...data,
    numberOfRepeat,
  };
};

export const SchdeuleModel = Object.freeze({
  create,
  updateIsRepeated,
  updateDays,
  updateNumberOfRepeat,
});
