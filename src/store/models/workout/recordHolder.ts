import { RecordType } from './record';

export type RecordHolderType = {
  id: string;
  programId: string;
  workoutId: string;
  records: RecordType[];
};

const create = (args: Partial<RecordHolderType> = {}) => {
  return {
    id: `rh_${Math.random()}`,
    programId: '',
    workoutId: '',
    records: new Array<RecordType>(),
    ...args,
  };
};

const addRecord = (recordHolder: RecordHolderType, record: RecordType) => {
  return create({
    ...recordHolder,
    records: [...recordHolder.records, record],
  });
};

export const RecordHolderModel = Object.freeze({
  create,
  addRecord,
});
