import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../core';
import { MongoGenericRepository } from './mongo-data-services.repository';
import { User, Client, House, UserDocument, ClientDocument, HouseDocument } from '../model';

@Injectable()
export class MongoDataServices
  implements IDataServices<User>, OnApplicationBootstrap {
  users: MongoGenericRepository<User>;
  clients: MongoGenericRepository<Client>;
  houses: MongoGenericRepository<House>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Client.name)
    private ClientRepository: Model<ClientDocument>,
    @InjectModel(House.name)
    private HouseRepository: Model<HouseDocument>,
  ) { }

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.clients = new MongoGenericRepository<Client>(this.ClientRepository);
    this.houses = new MongoGenericRepository<House>(this.HouseRepository);
  }
}
