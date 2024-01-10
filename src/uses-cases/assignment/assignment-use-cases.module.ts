import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../db/mongo/mongo-data-services.module';
import { AssignmentFactoryService } from './assignment-factory.service';
import { AssignmentUseCases } from './assignment.use-case';

@Module({
    imports: [MongoDataServicesModule],
    providers: [AssignmentFactoryService, AssignmentUseCases],
    exports: [AssignmentFactoryService, AssignmentUseCases],
})
export class AssignmentUseCasesModule { }
