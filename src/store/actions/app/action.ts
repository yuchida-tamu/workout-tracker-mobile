import { ActionTypes } from './types';

type UpdateProcessingStatusAction = {
  type: ActionTypes.R_UPDATE_PROCESSING_STATUS;
  payload: {
    isProcessing: boolean;
  };
};

export const updateProcessingStatus = (isProcessing: boolean): UpdateProcessingStatusAction => {
  return {
    type: ActionTypes.R_UPDATE_PROCESSING_STATUS,
    payload: {
      isProcessing,
    },
  };
};
type UpdateBootingStatusAction = {
  type: ActionTypes.R_UPDATE_BOOTING_STATUS;
  payload: {
    isBooting: boolean;
  };
};

export const updateBootingStatus = (isBooting: boolean): UpdateBootingStatusAction => {
  return {
    type: ActionTypes.R_UPDATE_BOOTING_STATUS,
    payload: {
      isBooting,
    },
  };
};

type UpdateNeedSetupAction = {
  type: ActionTypes.R_UPDATE_SETUP_STATUS;
  payload: {
    needSetup: boolean;
  };
};

export const updateSetupStatus = (needSetup: boolean): UpdateNeedSetupAction => {
  return {
    type: ActionTypes.R_UPDATE_SETUP_STATUS,
    payload: {
      needSetup,
    },
  };
};

export type AppActions =
  | UpdateProcessingStatusAction
  | UpdateBootingStatusAction
  | UpdateNeedSetupAction;
