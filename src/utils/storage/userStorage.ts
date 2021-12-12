import { AsyncStorage } from 'react-native';
import { UserModelType } from '../../store/models/user/user';
import { AsyncStorageUtil } from './asyncStorage';

export class UserStorageUtil {
  private static getIdentifier(data: UserModelType) {
    return `@user_${data.username}`;
  }

  public static StoreUser(data: UserModelType) {
    const identifier = this.getIdentifier(data);
    return AsyncStorageUtil.StoreData(data, identifier);
  }

  public static GetUser(identifier: string) {
    return AsyncStorageUtil.GetData(identifier);
  }
}
