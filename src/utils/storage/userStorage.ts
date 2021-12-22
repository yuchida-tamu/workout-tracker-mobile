import { UserModelType } from '../../store/models/user/user';
import { AsyncStorageUtil } from './asyncStorage';

export class UserStorageUtil {
  static userKey = '@user';
  //今のところユーザーの切り替え機能は実装しないので（今後追加予定）キーは固定
  private static getIdentifier(data: UserModelType) {
    return this.userKey;
  }

  public static StoreUser(data: UserModelType) {
    const identifier = this.getIdentifier(data);
    return AsyncStorageUtil.StoreData(data, identifier);
  }

  public static GetUser(identifier: string = this.userKey) {
    return AsyncStorageUtil.GetData(identifier);
  }

  public static Initialize() {
    return AsyncStorageUtil.RemoveItem(this.userKey);
  }
}
