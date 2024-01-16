import { Injectable } from '@nestjs/common';
import { User } from '../../db/schema';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.username = createUserDto.username;
    newUser.passwd = createUserDto.passwd;

    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const newUser = new User();
    newUser.username = updateUserDto.username;
    newUser.passwd = updateUserDto.passwd;

    return newUser;
  }
}
