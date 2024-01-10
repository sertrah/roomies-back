import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../db/mongo/mongo-data-services.module';
import { MovementFactoryService } from './movement-factory.service';
import { MovementUseCases } from './movement.use-case';

@Module({
    imports: [MongoDataServicesModule],
    providers: [MovementFactoryService, MovementUseCases],
    exports: [MovementFactoryService, MovementUseCases],
})
export class MovementUseCasesModule { }
