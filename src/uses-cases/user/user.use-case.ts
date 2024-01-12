import { Injectable } from '@nestjs/common';
import { User } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos';
import { UserFactoryService } from './user-factory.service';

import { UserMapper } from './user.mapper';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
  ) { }

  getAllUser(): Promise<User[]> {
    const a = this.dataServices.users.getAll();
    return UserMapper.getAllUser(a);

  }

  getUserById(id: any): Promise<User> {
    const a = this.dataServices.users.get(id);
    return UserMapper.getUserById(a);
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const User = this.userFactoryService.createNewUser(createUserDto);
    const created = this.dataServices.users.create(User);
    return UserMapper.createUser(created)
  }

  updateUser(UserId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const User = this.userFactoryService.updateUser(updateUserDto);
    const userCreated = this.dataServices.users.update(UserId, User);
    return UserMapper.updateUser(userCreated)
  }
}
