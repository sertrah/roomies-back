import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../db/mongo/mongo-data-services.module';
import { ClientFactoryService } from './client-factory.service';
import { ClientUseCases } from './client.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [ClientFactoryService, ClientUseCases],
  exports: [ClientFactoryService, ClientUseCases],
})
export class ClientUseCasesModule { }
