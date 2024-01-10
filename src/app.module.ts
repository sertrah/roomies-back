import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { UserController, RoomiesController, AssignmentController } from './controllers';

import { AppService } from './app.service';
import { MongoServicesModule } from './db/mongo';
import { UserUseCasesModule } from './uses-cases/user/user-use-cases.module';
import { RoomiesUseCasesModule } from './uses-cases/roomies/roomies-use-cases.module';
import { AssignmentUseCasesModule } from './uses-cases/assignment/assignment-use-cases.module';

import 'dotenv/config';

@Module({
  imports: [MongoServicesModule, UserUseCasesModule, RoomiesUseCasesModule, AssignmentUseCasesModule],
  controllers: [UserController, RoomiesController, AssignmentController],
  providers: [AppService],
})
export class AppModule { }
