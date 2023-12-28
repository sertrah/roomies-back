import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from './mongo-data-services.module';

@Module({
  imports: [MongoDataServicesModule],
  exports: [MongoDataServicesModule],
})
export class MongoServicesModule {}
