import { Injectable } from '@nestjs/common';
import { Bill } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateBillDto, UpdateBillDto } from '../../core/dtos';
import { BillFactoryService } from './bill-factory.service';
import { BillMapper } from './bill.mapper';


@Injectable()
export class BillUseCases {
    constructor(
        private dataServices: IDataServices,
        private billFactoryService: BillFactoryService,
    ) { }

    getAllBill(): Promise<Bill[]> {
        const a = this.dataServices.bills.getAll();
        return BillMapper.getAllBill(a);

    }

    getBillById(id: any): Promise<Bill> {
        const a = this.dataServices.bills.get(id);
        return BillMapper.getBillById(a);
    }

    createBill(createBillDto: CreateBillDto): Promise<Bill> {
        const Bill = this.billFactoryService.createNewBill(createBillDto);
        const created = this.dataServices.bills.create(Bill);
        return BillMapper.createBill(created)
    }

    updateBill(BillId: string, updateBillDto: UpdateBillDto): Promise<Bill> {
        const Bill = this.billFactoryService.updateBill(updateBillDto);
        const billCreated = this.dataServices.bills.update(BillId, Bill);
        return BillMapper.updateBill(billCreated)
    }
}
