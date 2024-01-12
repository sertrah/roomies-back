import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../core';
import { MongoGenericRepository } from './mongo-data-services.repository';
import { User, Roomies, Assignment, Movement, Bill, UserDocument, RoomiesDocument, AssignmentDocument, MovementDocument, BillDocument } from '../model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap {
  users: MongoGenericRepository<User>;
  roomieses: MongoGenericRepository<Roomies>;
  assignments: MongoGenericRepository<Assignment>;
  movements: MongoGenericRepository<Movement>;
  bills: MongoGenericRepository<Bill>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Roomies.name)
    private RoomiesRepository: Model<RoomiesDocument>,
    @InjectModel(Assignment.name)
    private AssignmentRepository: Model<AssignmentDocument>,
    @InjectModel(Movement.name)
    private MovementRepository: Model<MovementDocument>,
    @InjectModel(Bill.name)
    private BillRepository: Model<BillDocument>,
  ) { }

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.roomieses = new MongoGenericRepository<Roomies>(this.RoomiesRepository);
    this.assignments = new MongoGenericRepository<Assignment>(this.AssignmentRepository);
    this.movements = new MongoGenericRepository<Movement>(this.MovementRepository);
    this.bills = new MongoGenericRepository<Bill>(this.BillRepository);
  }
}
