import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../core';
import { DATA_BASE_CONFIGURATION } from '../../configuration';
import { User, UserSchema, Client, ClientSchema } from '../model';
import { MongoDataServices } from './mongo-data-services.service';


console.log({ name: Client.name });
console.log({ name: User.name });
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Client.name, schema: ClientSchema }]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule { }
