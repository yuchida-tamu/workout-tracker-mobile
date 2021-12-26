export type RecordType = {
  load: number;
  reps: number;
};

const create = (args: Partial<RecordType> = {}) => {
  return {
    load: 0,
    reps: 0,
    ...args,
  };
};

const updateRecord = (data: RecordType, load: number, reps: number) => {
  return create({
    load,
    reps,
  });
};

export const SchdeuleModel = Object.freeze({
  create,
  updateRecord,
});
