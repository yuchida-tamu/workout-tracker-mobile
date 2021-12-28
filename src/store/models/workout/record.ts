export type RecordType = {
  id: string;
  userId: string;
  workoutId: string;
  date: string;
  reps: number;
  indexOfSet: number;
  load: number;
};

const create = (args: Partial<RecordType> = {}) => {
  return {
    id: `r_${Math.random()}`,
    userId: '',
    workoutId: '',
    date: new Date().toDateString(),
    reps: 0,
    indexOfSet: 0,
    load: 0,
    ...args,
  };
};

const updateDate = (data: RecordType, date: Date) => {
  return { ...data, date };
};

const updateReps = (data: RecordType, reps: number) => {
  return { ...data, reps };
};

const updateSets = (data: RecordType, indexOfSet: number) => {
  return {
    ...data,
    indexOfSet,
  };
};

const updateLoad = (data: RecordType, load: number) => {
  return { ...data, load };
};

export const RecordModel = Object.freeze({
  create,
  updateDate,
  updateLoad,
  updateReps,
  updateSets,
});
