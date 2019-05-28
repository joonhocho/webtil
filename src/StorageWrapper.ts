export class StorageWrapper<TData extends {}> {
  public storage: Storage | null;

  constructor(storage: Storage | null | undefined) {
    this.storage = storage || null;
  }

  public get<K extends keyof TData & string>(key: K): TData[K] | null {
    const { storage } = this;
    if (storage) {
      try {
        const s = storage.getItem(key);
        return s == null ? null : JSON.parse(s);
      } catch (e) {
        // noop
      }
    }
    return null;
  }

  public set<K extends keyof TData & string>(key: K, value: TData[K]): boolean {
    const { storage } = this;
    if (storage) {
      try {
        storage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        // noop
      }
    }
    return false;
  }

  public remove<K extends keyof TData & string>(key: K): void {
    const { storage } = this;
    if (storage) {
      try {
        storage.removeItem(key);
      } catch (e) {
        // noop
      }
    }
  }
}
