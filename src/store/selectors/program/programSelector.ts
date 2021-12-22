import { RootState } from '../../store';

export const programSelector = (state: RootState) => state.program;
export const programIdSelector = (state: RootState) => state.program.id;
export const programNameSelector = (state: RootState) => state.program.name;
