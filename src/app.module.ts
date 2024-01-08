import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { UserController, ClientController, HouseController } from './controllers';

import { AppService } from './app.service';
import { MongoServicesModule } from './db/mongo';
import { UserUseCasesModule } from './uses-cases/user/user-use-cases.module';
import { ClientUseCasesModule } from './uses-cases/client/client-use-cases.module';
import { HouseUseCasesModule } from './uses-cases/house/house-use-cases.module';

import 'dotenv/config';

@Module({
  imports: [MongoServicesModule, UserUseCasesModule, ClientUseCasesModule, HouseUseCasesModule],
  controllers: [UserController, ClientController, HouseController],
  providers: [AppService],
})
export class AppModule { }
