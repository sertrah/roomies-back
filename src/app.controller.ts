import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './module/user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
  ) {
    // console.log(userService);
    /* userService.create({
      firstName: 'JOSE',
      password: 'prueba',
      email: 'prueba',
      lastName: 'Giraldo',
    }); */
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
