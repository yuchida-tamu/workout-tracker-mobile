import { RootState } from '../../store';

export const userSelector = (state: RootState) => state.user;
export const usernameSelector = (state: RootState) => state.user.username;
export const iconUrlSelector = (state: RootState) => state.user.iconUrl;
