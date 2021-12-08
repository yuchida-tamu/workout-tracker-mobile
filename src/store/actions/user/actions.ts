import { UserModelType } from '../../models/user/user';
import { ActionTypes } from './types';

type CreateNewUserAction = {
  action: ActionTypes.R_CREATE_NEW_USER;
  payload: {
    user: UserModelType;
  };
};

export const createNewUser = (data: UserModelType): CreateNewUserAction => {
  return {
    action: ActionTypes.R_CREATE_NEW_USER,
    payload: {
      user: data,
    },
  };
};

type UpdateUsernameAction = {
  action: ActionTypes.R_UPDATE_USERNAME;
  payload: {
    username: string;
  };
};

export const updateUsername = (username: string): UpdateUsernameAction => {
  return {
    action: ActionTypes.R_UPDATE_USERNAME,
    payload: {
      username,
    },
  };
};

export type UserActions = CreateNewUserAction | UpdateUsernameAction;
