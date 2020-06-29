import { Counted } from 'sdk/nest/dtos';

export interface ICrud<T> {
  getAll(...args: any[]): Promise<Counted<T>>;
  getById(id: number): Promise<T>;
  create(model: T): Promise<T>;
  update(id: number, model: T): Promise<T>;
  delete(id: number): Promise<void>;
}
