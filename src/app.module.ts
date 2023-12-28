import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { UserController } from './controllers';

import { AppService } from './app.service';
import { MongoServicesModule } from './db/mongo';
import { UserUseCasesModule } from './uses-cases/user/user-use-cases.module';

import 'dotenv/config';

@Module({
  imports: [MongoServicesModule, UserUseCasesModule],
  controllers: [UserController],
  providers: [AppService],
})
export class AppModule {}
