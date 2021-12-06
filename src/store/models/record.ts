export type RecordType = {
  id: string;
  userId: string;
  workoutId: string;
  date: Date;
  reps: number;
  sets: number;
  load: number;
};

const create = (args: Partial<RecordType> = {}) => {
  return {
    id: '',
    userId: '',
    workoutId: '',
    date: new Date(),
    reps: 0,
    sets: 0,
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

const updateSets = (data: RecordType, sets: number) => {
  return {
    ...data,
    sets,
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
