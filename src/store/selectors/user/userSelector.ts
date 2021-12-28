import { RootState } from '../../store';
import { programIdSelector } from '../program/programSelector';

export const userSelector = (state: RootState) => state.user;
export const usernameSelector = (state: RootState) => state.user.username;
export const iconUrlSelector = (state: RootState) => state.user.iconUrl;
export const numberOfProgramsSelector = (state: RootState) => state.user.programs.length;
export const programsSelector = (state: RootState) => state.user.programs;
export const programByIdSelector = (programId: string) => (state: RootState) => {
  const filtered = state.user.programs.filter((program) => program.id === programId);
  return filtered[0];
};
export const idOfFirstRecordHolderSelector = (programId: string) => (state: RootState) => {
  const filtered = state.user.programs.filter((program) => program.id === programId);
  return filtered[0].recordMap[0].id;
};
export const workoutIndexSelector =
  (programId: string, workoutId: string, recordGroupId: string) => (state: RootState) => {
    const filtered = state.user.programs.filter((program) => program.id === programId)[0];
    const recordGroup = filtered.recordMap.filter((rm) => rm.id === recordGroupId)[0];
    const recordHolder = recordGroup.recordHolders.filter((rh) => rh.workoutId === workoutId)[0];
    if (!recordHolder) return 0;
    return recordHolder.records.length;
  };

export const lastRecordGroupSelector = (programId: string) => (state: RootState) => {
  const filtered = state.user.programs.filter((program) => program.id === programId)[0];
  return filtered.recordMap[filtered.recordMap.length - 1];
};
