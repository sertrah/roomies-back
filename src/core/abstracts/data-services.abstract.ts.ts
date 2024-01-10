import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices<T> {
  abstract users: IGenericRepository<T>;
  abstract roomieses: IGenericRepository<T>;
  abstract assignments: IGenericRepository<T>;
}
