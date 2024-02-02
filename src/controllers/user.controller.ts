import { Controller, Get, Param, Post, Body, Put, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../core/dtos';
import { UserUseCases } from '../uses-cases/user/user.use-case';

import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local.guard';

import * as bcrypt from 'bcrypt';

@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) { }

  @Get()
  async getAll() {
    return this.userUseCases.getAllUser();
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

  @Post('/signup')
  async addUser(
    @Body('password') userPassword: string,
    @Body('username') userName: string,
  ) {
    console.log('HARLEN')
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);
    const result = await this.userUseCases.insertUser(
      userName,
      hashedPassword,
    );
    return {
      msg: 'User successfully registered',
      userId: result.id,
      userName: result.username
    };
  }

  //Post / Login
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req): any {
    return {
      User: req.user,
      msg: 'User logged in'
    };
  }

  // Get / protected
  @UseGuards(AuthenticatedGuard)
  @Get('/protected')
  getHello(@Request() req): string {
    return req.user;
  }
  //Get / logout
  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'The user session has ended' }
  }
}
