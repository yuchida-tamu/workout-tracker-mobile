import { RootState } from '../../store';
import { RecordGroupType } from '../../models/workout/recordGroup';

export type ProgressDisplayDataType = {
  id: string;
  date: string;
  total: number;
  loadPerRep: number;
  max: number;
};

export const userSelector = (state: RootState) => state.user;
export const usernameSelector = (state: RootState) => state.user.username;
export const iconUrlSelector = (state: RootState) => state.user.iconUrl;
export const numberOfProgramsSelector = (state: RootState) => state.user.programs.length;
export const programsSelector = (state: RootState) => state.user.programs;
export const programByIdSelector = (programId: string) => (state: RootState) => {
  const filtered = state.user.programs.filter((program) => program.id === programId);
  return filtered[0];
};
export const progressSelector = (programId: string) => (state: RootState) => {
  const targetProgram = state.user.programs.filter((program) => program.id === programId);
  if (targetProgram.length === 0) return undefined;
  return targetProgram[0].progressList;
};
export const progressFilteredByWorkoutSelector =
  (programId: string, workoutId: string) => (state: RootState) => {
    const targetProgram = state.user.programs.filter((program) => program.id === programId);
    if (targetProgram.length === 0) return undefined;

    const list: RecordGroupType[] = targetProgram[0].progressList.map((progress) => {
      return {
        id: progress.id,
        date: progress.date,
        recordHolders: progress.recordHolders.filter((rh) => rh.workoutId === workoutId),
      };
    });

    const processed: ProgressDisplayDataType[] = list.map((rg) => {
      let max = 0;
      let total = 0;
      let totalReps = 0;
      rg.recordHolders.forEach((item) => {
        item.records.forEach((record) => {
          total += record.load;
          totalReps += record.reps;
          if (record.load > max) {
            max = record.load;
          }
        });
      });

      return {
        id: `processed_${rg.id}`,
        date: rg.date,
        loadPerRep: total / totalReps,
        max,
        total,
      };
    });

    return processed;
  };
