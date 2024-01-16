import { Bill, Movement, User, Roomie, Assignment } from '../../db/schema';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;
  abstract roomieses: IGenericRepository<Roomie>;
  abstract assignments: IGenericRepository<Assignment>;
  abstract movements: IGenericRepository<Movement>;
  abstract bills: IGenericRepository<Bill>;
}
