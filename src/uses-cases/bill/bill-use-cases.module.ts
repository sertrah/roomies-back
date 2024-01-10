import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../db/mongo/mongo-data-services.module';
import { BillFactoryService } from './bill-factory.service';
import { BillUseCases } from './bill.use-case';

@Module({
    imports: [MongoDataServicesModule],
    providers: [BillFactoryService, BillUseCases],
    exports: [BillFactoryService, BillUseCases],
})
export class BillUseCasesModule { }
