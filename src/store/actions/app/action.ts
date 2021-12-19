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

export type AppActions = UpdateProcessingStatusAction | UpdateBootingStatusAction;
