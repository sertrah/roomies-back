import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import forFeatureDb from 'src/db/for-feature.db';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports: [MongooseModule.forFeature(forFeatureDb)],
  exports: [ClientService],
})
export class ClientModule {}
