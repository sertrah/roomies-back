import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../core';
import { MongoGenericRepository } from './mongo-data-services.repository';
import { User, Roomie, Assignment, Movement, Bill, House, UserDocument, RoomiesDocument, AssignmentDocument, MovementDocument, BillDocument, HouseDocument } from '../schema';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap {
  users: MongoGenericRepository<User>;
  roomieses: MongoGenericRepository<Roomie>;
  assignments: MongoGenericRepository<Assignment>;
  movements: MongoGenericRepository<Movement>;
  bills: MongoGenericRepository<Bill>;
  houses: MongoGenericRepository<House>;
  userSibitis: any;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Roomie.name)
    private RoomiesRepository: Model<RoomiesDocument>,
    @InjectModel(Assignment.name)
    private AssignmentRepository: Model<AssignmentDocument>,
    @InjectModel(Movement.name)
    private MovementRepository: Model<MovementDocument>,
    @InjectModel(Bill.name)
    private BillRepository: Model<BillDocument>,
    @InjectModel(House.name)
    private HouseRepository: Model<HouseDocument>,
  ) { }

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.roomieses = new MongoGenericRepository<Roomie>(this.RoomiesRepository);
    this.assignments = new MongoGenericRepository<Assignment>(this.AssignmentRepository);
    this.movements = new MongoGenericRepository<Movement>(this.MovementRepository);
    this.bills = new MongoGenericRepository<Bill>(this.BillRepository);
    this.houses = new MongoGenericRepository<House>(this.HouseRepository);
  }
}
