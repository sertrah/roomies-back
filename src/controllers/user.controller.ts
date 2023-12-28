import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../core/dtos';
import { UserUseCases } from '../uses-cases/user/user.use-case';

@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  async getAll() {
    return this.userUseCases.getAllUsers();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.userUseCases.getUserById(id);
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.userUseCases.createUser(userDto);
  }

  @Put(':id')
  updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userUseCases.updateUser(userId, updateUserDto);
  }
}
