import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { UserController, ClientController } from './controllers';

import { AppService } from './app.service';
import { MongoServicesModule } from './db/mongo';
import { UserUseCasesModule } from './uses-cases/user/user-use-cases.module';
import { ClientUseCasesModule } from './uses-cases/client/client-use-cases.module';

import 'dotenv/config';

@Module({
  imports: [MongoServicesModule, UserUseCasesModule, ClientUseCasesModule],
  controllers: [UserController, ClientController],
  providers: [AppService],
})
export class AppModule { }
