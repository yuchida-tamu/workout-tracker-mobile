import { UserActions } from '../actions/user/actions';
import { ActionTypes } from '../actions/user/types';
import { UserModel, UserModelType } from '../models/user';

export function userReducer(data: UserModelType = UserModel.create(), action: UserActions) {
  switch (action.action) {
  case ActionTypes.R_CREATE_NEW_USER:
    return UserModel.create(action.payload.user);
  case ActionTypes.R_UPDATE_USERNAME:
    return UserModel.updateUsername(data, action.payload.username);
  default:
    return data;
  }
}