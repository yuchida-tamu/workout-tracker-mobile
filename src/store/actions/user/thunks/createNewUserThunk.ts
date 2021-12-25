import { ThunkAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { Action } from 'redux';
import { navigate } from '../../../../navigation/RootNavigation';
import { UserStorageUtil } from '../../../../utils/storage/userStorage';
import { UserModelType } from '../../../models/user/user';
import { RootState } from '../../../store';
import { updateProcessingStatus } from '../../app/action';
import { createNewUser, UserActions } from '../actions';

export function createNewUserThunk(
  user: UserModelType,
): ThunkAction<void, RootState, undefined, UserActions> {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await UserStorageUtil.StoreUser(user);

      if (response.result && !response.error) {
        dispatch(createNewUser(response.result as UserModelType));
      }
    } catch (err) {
      // error handling
    }
    dispatch(updateProcessingStatus(false));
    navigate('UserHome');
  };
}
