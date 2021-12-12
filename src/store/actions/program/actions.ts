import { ProgramType } from '../../models/program/program';
import { ActionTypes } from './types';

type CreateNewProgramAction = {
  type: ActionTypes.R_CREATE_NEW_PROGRAM;
  payload: {
    program: ProgramType;
  };
};

export const createNewProgram = (data: ProgramType): CreateNewProgramAction => {
  return {
    type: ActionTypes.R_CREATE_NEW_PROGRAM,
    payload: {
      program: data,
    },
  };
};

type UpdateProgramNameAction = {
  type: ActionTypes.R_UPDATE_PROGRAM_NAME;
  payload: {
    name: string;
  };
};

export const updateProgramName = (name: string): UpdateProgramNameAction => {
  return {
    type: ActionTypes.R_UPDATE_PROGRAM_NAME,
    payload: {
      name,
    },
  };
};

export type ProgramActions = CreateNewProgramAction | UpdateProgramNameAction;
