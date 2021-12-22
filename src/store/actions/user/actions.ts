import { UserModelType } from '../../models/user/user';
import { ActionTypes } from './types';

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

export type UserActions = CreateNewUserAction | UpdateUsernameAction | ClearUserAction;
