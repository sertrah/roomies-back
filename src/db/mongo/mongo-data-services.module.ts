import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../core';
import { DATA_BASE_CONFIGURATION } from '../../configuration';
import { User, UserSchema, Roomie, RoomiesSchema, Assignment, AssignmentSchema, Movement, MovementSchema, Bill, BillSchema, House, HouseSchema } from '../schema';
import { MongoDataServices } from './mongo-data-services.service';


console.log({ name: Roomie.name });
console.log({ name: User.name });
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Roomie.name, schema: RoomiesSchema },
      { name: Assignment.name, schema: AssignmentSchema },
      { name: Movement.name, schema: MovementSchema },
      { name: Bill.name, schema: BillSchema },
      { name: House.name, schema: HouseSchema },]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString, {
      dbName: DATA_BASE_CONFIGURATION.DATABASE_NAME
    }),
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
