import { AppActions } from '../actions/app/action';
import { ActionTypes } from '../actions/app/types';
import { AppModel, AppModelType } from '../models/app/app';

export function appReducer(data: AppModelType = AppModel.create(), action: AppActions) {
  switch (action.type) {
  case ActionTypes.R_UPDATE_PROCESSING_STATUS:
    return AppModel.updateIsProcessing(data, action.payload.isProcessing);
  default:
    return data;
  }
}