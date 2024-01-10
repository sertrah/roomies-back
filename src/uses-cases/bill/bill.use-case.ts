import { Injectable } from '@nestjs/common';
import { Bill } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateBillDto, UpdateBillDto } from '../../core/dtos';
import { BillFactoryService } from './bill-factory.service';

@Injectable()
export class BillUseCases {
    constructor(
        private dataServices: IDataServices<Bill>,
        private billFactoryService: BillFactoryService,
    ) { }

    getAllBill(): Promise<Bill[]> {
        return this.dataServices.bills.getAll();
    }

    getBillById(id: any): Promise<Bill> {
        return this.dataServices.bills.get(id);
    }

    createBill(createBillDto: CreateBillDto): Promise<Bill> {
        const Bill = this.billFactoryService.createNewBill(createBillDto);
        return this.dataServices.bills.create(Bill);
    }

    updateBill(BillId: string, updateBillDto: UpdateBillDto): Promise<Bill> {
        const Bill = this.billFactoryService.updateBill(updateBillDto);
        return this.dataServices.bills.update(BillId, Bill);
    }
}
