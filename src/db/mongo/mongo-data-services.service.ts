import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../core';
import { MongoGenericRepository } from './mongo-data-services.repository';
import { User, Roomies, Assignment, UserDocument, RoomiesDocument, AssignmentDocument } from '../model';

@Injectable()
export class MongoDataServices
  implements IDataServices<User>, OnApplicationBootstrap {
  users: MongoGenericRepository<User>;
  roomieses: MongoGenericRepository<Roomies>;
  assignments: MongoGenericRepository<Assignment>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Roomies.name)
    private RoomiesRepository: Model<RoomiesDocument>,
    @InjectModel(Assignment.name)
    private AssignmentRepository: Model<AssignmentDocument>,
  ) { }

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.roomieses = new MongoGenericRepository<Roomies>(this.RoomiesRepository);
    this.assignments = new MongoGenericRepository<Assignment>(this.AssignmentRepository);
  }
}
