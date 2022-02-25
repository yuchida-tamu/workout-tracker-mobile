import { ProgramActions } from '../actions/program/actions';
import { ActionTypes } from '../actions/program/types';
import { ProgramModel, ProgramType } from '../models/program/program';

export function programReducer(data: ProgramType = ProgramModel.create(), action: ProgramActions) {
  switch (action.type) {
    case ActionTypes.R_CREATE_NEW_PROGRAM:
      return ProgramModel.create(action.payload.program);
    case ActionTypes.R_UPDATE_PROGRAM_NAME:
      return ProgramModel.updateName(data, action.payload.name);
    default:
      return data;
  }
}
