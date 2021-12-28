import { RootState } from '../../store';

export const userSelector = (state: RootState) => state.user;
export const usernameSelector = (state: RootState) => state.user.username;
export const iconUrlSelector = (state: RootState) => state.user.iconUrl;
export const numberOfProgramsSelector = (state: RootState) => state.user.programs.length;
export const programsSelector = (state: RootState) => state.user.programs;
export const programByIdSelector = (programId: string) => (state: RootState) => {
  const filtered = state.user.programs.filter((program) => program.id === programId);
  return filtered[0];
};
