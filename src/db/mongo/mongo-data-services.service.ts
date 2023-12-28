import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../core';
import { MongoGenericRepository } from './mongo-data-services.repository';
import { User, UserDocument } from '../model';

@Injectable()
export class MongoDataServices
  implements IDataServices<User>, OnApplicationBootstrap
{
  users: MongoGenericRepository<User>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
  ) {}

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
  }
}
