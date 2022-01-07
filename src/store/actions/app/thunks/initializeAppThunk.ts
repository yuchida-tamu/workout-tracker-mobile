import { ThunkAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { Action } from 'redux';
import { UserStorageUtil } from '../../../../utils/storage/userStorage';
import { RootState } from '../../../store';
import { clearUser } from '../../user/actions';
import { AppActions, updateProcessingStatus, updateSetupStatus } from '../action';

export function initializeAppThunk(): ThunkAction<void, RootState, undefined, AppActions> {
  return async (dispatch: Dispatch<Action>) => {
    // dispatch action to set isBooting true,
    dispatch(updateProcessingStatus(true));
    // fetch user data from cache
    try {
      await UserStorageUtil.Initialize();
      dispatch(clearUser());
    } catch (error) {
      dispatch(updateProcessingStatus(false));
      dispatch(updateSetupStatus(true));
      return;
    }
    // dispatch action to set isBooting false
    dispatch(updateProcessingStatus(false));
    dispatch(updateSetupStatus(true));
  };
}
