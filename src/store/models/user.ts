export type UserModelType = {
  username: string;
  iconUrl: string;
};

const create = (args: Partial<UserModelType> = {}) => {
  return {
    username: '',
    iconUrl: '',
    ...args,
  };
};

const updateUsername = (data: UserModelType, username: string) => {
  return create({ ...data, username });
};

const updateIconUrl = (data: UserModelType, iconUrl: string) => {
  return create({ ...data, iconUrl });
};

export const UserModel = Object.freeze({
  create,
  updateUsername,
  updateIconUrl,
});
