import { ThunkAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { Action } from 'redux';
import { UserStorageUtil } from '../../../../utils/storage/userStorage';
import { UserModelType } from '../../../models/user/user';
import { RootState } from '../../../store';
import { createNewUser } from '../../user/actions';
import { AppActions, updateBootingStatus, updateSetupStatus } from '../action';

export function setupOnLaunchThunk(
  user: UserModelType,
): ThunkAction<void, RootState, undefined, AppActions> {
  return async (dispatch: Dispatch<Action>) => {
    // dispatch action to set isBooting true,
    dispatch(updateBootingStatus(true));
    // fetch user data from cache
    try {
      const response = await UserStorageUtil.StoreUser(user);
      if (response.result || !response.error) {
        dispatch(createNewUser(user));
        dispatch(updateSetupStatus(false));
      }
    } catch (error) {
      dispatch(updateBootingStatus(true));
      dispatch(updateSetupStatus(true));
      return;
    }
    // dispatch action to set isBooting false
    dispatch(updateBootingStatus(false));
  };
}
