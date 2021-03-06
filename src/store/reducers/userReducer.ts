import { mockUser } from '../../mock/user';
import { UserActions } from '../actions/user/actions';
import { ActionTypes } from '../actions/user/types';
import { UserModel, UserModelType } from '../models/user/user';

export function userReducer(data: UserModelType = UserModel.create(), action: UserActions) {
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
  case ActionTypes.R_UPDATE_PROGRAM_SCHEDULE:
    return UserModel.updateProgramSchedule(
      data,
      action.payload.programId,
      action.payload.schedule,
    );
  case ActionTypes.R_UPDATE_USER:
    return UserModel.create(action.payload.user);

  case ActionTypes.R_ADD_NEW_RECORD_GROUP:
    return UserModel.addNewRecordGroupToProgram(data, action.payload.programId);
  case ActionTypes.R_UPDATE_PROGRAM_PROGRESS:
    return UserModel.updateProgramProgress(
      data,
      action.payload.progress,
      action.payload.programId,
    );
  default:
    return data;
  }
}
