import { Bill, Movement, User, Roomies, Assignment } from '../../db/model';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;
  abstract roomieses: IGenericRepository<Roomies>;
  abstract assignments: IGenericRepository<Assignment>;
  abstract movements: IGenericRepository<Movement>;
  abstract bills: IGenericRepository<Bill>;
}
