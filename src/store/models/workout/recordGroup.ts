import { RecordType } from './record';
import { RecordHolderType } from './recordHolder';

export type RecordGroupType = {
  id: string;
  date: string;
  recordHolders: RecordHolderType[];
};

export const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

export const cerateRecordGroup = (args: Partial<RecordGroupType> = {}): RecordGroupType => {
  const date = new Date();
  const dateString = formatDate(date);
  return {
    id: `rg_${Math.random()}`,
    date: dateString,
    recordHolders: new Array<RecordHolderType>(),
    ...args,
  };
};

export const addRecordToGroup = (data: RecordGroupType, record: RecordType): RecordGroupType => {
  const filtered = data.recordHolders.filter((r) => r.workoutId !== record.workoutId);
  const update = filtered[0];
  if (!update) return cerateRecordGroup({ ...data, recordHolders: [update] });
  update.records.push(record);
  return cerateRecordGroup({ ...data, recordHolders: [...filtered, update] });
};

export const RecordGroupModel = Object.freeze({
  cerateRecordGroup,
  addRecordToGroup,
});
