import { ThunkAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { Action } from 'redux';
import { UserStorageUtil } from '../../../../utils/storage/userStorage';
import { AppModel, AppModelType } from '../../../models/app/app';
import { UserModelType } from '../../../models/user/user';
import { RootState } from '../../../store';
import { createNewUser } from '../../user/actions';
import { AppActions, updateBootingStatus, updateSetupStatus } from '../action';

export function onLaunchThunk(): ThunkAction<void, RootState, undefined, AppActions> {
  return async (dispatch: Dispatch<Action>) => {
    // dispatch action to set isBooting true,
    dispatch(updateBootingStatus(true));
    // fetch user data from cache
    try {
      const { result, error } = await fetchUserDataFromLocalStorage();

      if (result === null || error) {
        dispatch(updateSetupStatus(true));
      }
      if (result && !error) {
        dispatch(createNewUser(result as UserModelType));
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

function fetchUserDataFromLocalStorage() {
  return UserStorageUtil.GetUser();
}
