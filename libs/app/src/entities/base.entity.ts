export class BaseEntity {
  static create<T extends BaseEntity>(
    this: new (...args: any[]) => T,
    data: Record<keyof T, unknown>,
  ) {
    const instance = new this();
    for (const [key, value] of Object.entries(data)) {
      instance[key] = value;
    }
    return instance;
  }
}
