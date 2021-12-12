import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModelTypes } from '../../store/models';

export class AsyncStorageUtil {
  public static async StoreData(data: ModelTypes, identifier: string) {
    try {
      const serializedData = JSON.stringify(data);
      await AsyncStorage.setItem(identifier, serializedData);
      return { result: data };
    } catch (err) {
      return { error: err as unknown };
    }
  }

  public static async GetData(identifier: string) {
    try {
      const serializedData = await AsyncStorage.getItem(identifier);
      const data = serializedData !== null ? (JSON.parse(serializedData) as ModelTypes) : null;
      return { result: data };
    } catch (err) {
      return { error: err as unknown };
    }
  }
}
