import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { UserController, RoomiesController } from './controllers';

import { AppService } from './app.service';
import { MongoServicesModule } from './db/mongo';
import { UserUseCasesModule } from './uses-cases/user/user-use-cases.module';
import { RoomiesUseCasesModule } from './uses-cases/roomies/roomies-use-cases.module';

import 'dotenv/config';

@Module({
  imports: [MongoServicesModule, UserUseCasesModule, RoomiesUseCasesModule],
  controllers: [UserController, RoomiesController],
  providers: [AppService],
})
export class AppModule { }
