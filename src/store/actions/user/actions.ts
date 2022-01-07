import { ScheduleType } from '../../models/program/schedule';
import { UserModelType } from '../../models/user/user';
import { ActionTypes } from './types';
import { RecordGroupType } from '../../models/workout/recordGroup';

type CreateNewUserAction = {
  type: ActionTypes.R_CREATE_NEW_USER;
  payload: {
    user: UserModelType;
  };
};

export const createNewUser = (data: UserModelType): CreateNewUserAction => {
  return {
    type: ActionTypes.R_CREATE_NEW_USER,
    payload: {
      user: data,
    },
  };
};

type UpateUserAction = {
  type: ActionTypes.R_UPDATE_USER;
  payload: {
    user: UserModelType;
  };
};

export const updateUser = (data: UserModelType): UpateUserAction => {
  return {
    type: ActionTypes.R_UPDATE_USER,
    payload: {
      user: data,
    },
  };
};

type UpdateUsernameAction = {
  type: ActionTypes.R_UPDATE_USERNAME;
  payload: {
    username: string;
  };
};

export const updateUsername = (username: string): UpdateUsernameAction => {
  return {
    type: ActionTypes.R_UPDATE_USERNAME,
    payload: {
      username,
    },
  };
};

type ClearUserAction = {
  type: ActionTypes.R_CLEAR_USER;
};

export const clearUser = (): ClearUserAction => {
  return {
    type: ActionTypes.R_CLEAR_USER,
  };
};

type UpdateProgramScheduleAction = {
  type: ActionTypes.R_UPDATE_PROGRAM_SCHEDULE;
  payload: {
    programId: string;
    schedule: ScheduleType;
  };
};

export const updateProgramSchedule = (
  programId: string,
  schedule: ScheduleType,
): UpdateProgramScheduleAction => {
  return {
    type: ActionTypes.R_UPDATE_PROGRAM_SCHEDULE,
    payload: {
      programId,
      schedule,
    },
  };
};

type AddNewRecordGroupToProgramAction = {
  type: ActionTypes.R_ADD_NEW_RECORD_GROUP;
  payload: {
    programId: string;
  };
};
export const addNewRecordGroupToProgram = (programId: string): AddNewRecordGroupToProgramAction => {
  return {
    type: ActionTypes.R_ADD_NEW_RECORD_GROUP,
    payload: {
      programId,
    },
  };
};
type UpdateProgramProgressAction = {
  type: ActionTypes.R_UPDATE_PROGRAM_PROGRESS;
  payload: {
    progress: RecordGroupType;
    programId: string;
  };
};

export const updateProgramProgress = (
  progress: RecordGroupType,
  programId: string,
): UpdateProgramProgressAction => {
  return {
    type: ActionTypes.R_UPDATE_PROGRAM_PROGRESS,
    payload: {
      progress,
      programId,
    },
  };
};

export type UserActions =
  | CreateNewUserAction
  | UpdateUsernameAction
  | ClearUserAction
  | UpdateProgramScheduleAction
  | UpateUserAction
  | AddNewRecordGroupToProgramAction
  | UpdateProgramProgressAction;
