import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../db/mongo/mongo-data-services.module';
import { RoomiesFactoryService } from './roomies-factory.service';
import { RoomiesUseCases } from './roomies.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [RoomiesFactoryService, RoomiesUseCases],
  exports: [RoomiesFactoryService, RoomiesUseCases],
})
export class RoomiesUseCasesModule { }
