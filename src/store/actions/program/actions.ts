import { ProgramType } from '../../models/program/program';
import { RecordType } from '../../models/workout/record';
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

type UpdateRecordType = {
  type: ActionTypes.R_UPDATE_RECORD;
  payload: {
    date: string;
    record: RecordType;
    recordGroup: string;
  };
};
export const updateRecord = (
  date: string,
  record: RecordType,
  recordGroup: string,
): UpdateRecordType => {
  return {
    type: ActionTypes.R_UPDATE_RECORD,
    payload: {
      date: date,
      record,
      recordGroup,
    },
  };
};

export type ProgramActions = CreateNewProgramAction | UpdateProgramNameAction | UpdateRecordType;
