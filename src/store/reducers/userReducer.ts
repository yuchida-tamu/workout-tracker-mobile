import { mockUser } from '../../mock/user';
import { UserActions } from '../actions/user/actions';
import { ActionTypes } from '../actions/user/types';
import { UserModel, UserModelType } from '../models/user/user';

export function userReducer(data: UserModelType = UserModel.create(mockUser), action: UserActions) {
  switch (action.type) {
  case ActionTypes.R_CREATE_NEW_USER:
    return UserModel.create(action.payload.user);
  case ActionTypes.R_UPDATE_USERNAME:
    return UserModel.updateUsername(data, action.payload.username);
  case ActionTypes.R_CLEAR_USER:
    return UserModel.create({
      username: '',
      iconUrl: '',
    });
  default:
    return data;
  }
}
