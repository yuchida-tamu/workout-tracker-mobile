import { ProgramType } from '../../models/program/program';
import { ActionTypes } from './types';

type CreateNewProgramAction = {
  action: ActionTypes.R_CREATE_NEW_PROGRAM;
  payload: {
    program: ProgramType;
  };
};

export const createNewProgram = (data: ProgramType): CreateNewProgramAction => {
  return {
    action: ActionTypes.R_CREATE_NEW_PROGRAM,
    payload: {
      program: data,
    },
  };
};

type UpdateProgramNameAction = {
  action: ActionTypes.R_UPDATE_PROGRAM_NAME;
  payload: {
    name: string;
  };
};

export const updateProgramName = (name: string): UpdateProgramNameAction => {
  return {
    action: ActionTypes.R_UPDATE_PROGRAM_NAME,
    payload: {
      name,
    },
  };
};

export type ProgramActions = CreateNewProgramAction | UpdateProgramNameAction;
