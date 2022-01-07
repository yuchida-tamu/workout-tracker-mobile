import { ThunkAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { Action } from 'redux';
import { UserStorageUtil } from '../../../../utils/storage/userStorage';
import { UserModelType } from '../../../models/user/user';
import { RootState } from '../../../store';
import { updateProcessingStatus } from '../../app/action';
import { updateUser, UserActions } from '../actions';

export function updateUserThunk(
  user: UserModelType,
): ThunkAction<void, RootState, undefined, UserActions> {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(updateProcessingStatus(true));

    try {
      const response = await UserStorageUtil.StoreUser(user);

      if (response.result && !response.error) {
        dispatch(updateUser(response.result as UserModelType));
      }
    } catch (err) {
      // error handling
    }
    dispatch(updateProcessingStatus(false));
  };
}
