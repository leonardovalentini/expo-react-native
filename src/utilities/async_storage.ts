import AsyncStorage from "@react-native-async-storage/async-storage";

export const set = async (key: string, value: unknown): Promise<void> => {
  const serialized = JSON.stringify(value);
  await AsyncStorage.setItem(key, serialized ?? "null");
};

export const get = async <T = unknown>(key: string): Promise<T | null> => {
  try {
    const raw = await AsyncStorage.getItem(key);

    if (raw === null) {
      return null;
    }

    return JSON.parse(raw) as T;
  } catch (e) {
    return null;
  }
};

export const remove = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};

export const clear = async (): Promise<void> => {
  await AsyncStorage.clear();
};
