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

export type AppActions = UpdateProcessingStatusAction;
