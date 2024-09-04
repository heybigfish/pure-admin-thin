import { storageLocal } from "@pureadmin/utils";
export function getStorageItem<T>(key: string): T | null {
  const value = storageLocal().getItem(key);
  return value as T | null;
}
