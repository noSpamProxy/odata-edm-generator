/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Class<T> {
  prototype: T;
  new(...args: any[]): T;
}

export interface ModelClass<M> extends Class<M> {
  create<T extends M = M>(raw: T): T;
}

/**
 * Helper type to infer the instance type returned by a model's static create function.
 */
export type ModelInstance<T> = T extends { create(raw: unknown): infer M } ? M : never;

export type ODataEntity<T> = Class<T> & {
  ODataEndpoint: string;
};

export const odataTypeKey = '@odata.type';
export type ODataRawType<T> = T & { [odataTypeKey]: string };
export type ODataComplexType<T> = Class<T> & {
  readonly prototype: ODataRawType<T>;
  canHandle(arg: string): boolean;
};

/**
 * Try converting a raw object or instance into an instance of the specified model class.
 *
 * @param modelClass The model class to convert into.
 * @param rawOrInstance
 * + `null`, `undefined` or instances of `modelClass` are returned as is.
 * + Anything else is converted into the model class using `modelClass.create`.
 */
export function createModel<M, T extends ModelInstance<M> | null | undefined>(modelClass: M, rawOrInstance: T): T {
  if (rawOrInstance === null || rawOrInstance === undefined || rawOrInstance instanceof (modelClass as unknown as Class<M>)) {
    return rawOrInstance;
  }
  return (modelClass as ModelClass<T>).create(rawOrInstance);
}
