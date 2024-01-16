import { Injectable } from '@nestjs/common';
import { Bill } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateBillDto, UpdateBillDto } from '../../core/dtos';
import { BillFactoryService } from './bill-factory.service';

@Injectable()
export class BillUseCases {
    constructor(
        private dataServices: IDataServices,
        private billFactoryService: BillFactoryService,
    ) { }

    getAllBill(): Promise<Bill[]> { // CAMBIANDO DE []DB -> []ENTIDAD DE DOMINIO
        const p = this.dataServices.bills.getAll();
        return p.then((v) => v.map(billDB => ({
            name: 'name',
            totalAmount: 123,
            paymentPeriod: 'paymentPeriod',
            houseId: 'houseId',
            createdAt: 'createdAt',
            description: 'description',
        })))
    }

    getBillById(id: any): Promise<Bill> {
        const v = this.dataServices.bills.get(id);
        return v.then((a) => ({
            name: 'name',
            totalAmount: 123,
            paymentPeriod: 'paymentPeriod',
            houseId: 'houseId',
            createdAt: 'createdAt',
            description: 'description',
        }));
    }

    createBill(createBillDto: CreateBillDto): Promise<Bill> {
        const Bill = this.billFactoryService.createNewBill(createBillDto);
        return this.dataServices.bills.create(Bill).then((x => ({
            name: 'name',
            totalAmount: 123,
            paymentPeriod: 'paymentPeriod',
            houseId: 'houseId',
            createdAt: 'createdAt',
            description: 'description',
        })));
    }

    updateBill(BillId: string, updateBillDto: UpdateBillDto): Promise<Bill> {
        const Bill = this.billFactoryService.updateBill(updateBillDto);
        return this.dataServices.bills.update(BillId, Bill);
    }
}
