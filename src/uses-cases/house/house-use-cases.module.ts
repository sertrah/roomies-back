import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../db/mongo/mongo-data-services.module';
import { HouseFactoryService } from './house-factory.service';
import { HouseUseCases } from './house.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [HouseFactoryService, HouseUseCases],
  exports: [HouseFactoryService, HouseUseCases],
})
export class HouseUseCasesModule { }
