type UserModelType = {
  username: string;
  iconUrl: string;
};

const create = (args: Partial<UserModelType>) => {
  return {
    username: '',
    iconUrl: '',
    ...args,
  };
};

const updateUsername = (username: string) => {
  return create({ username });
};

const updateIconUrl = (iconUrl: string) => {
  return create({ iconUrl });
};

export const UserModel = Object.freeze({
  create,
  updateUsername,
  updateIconUrl,
});
