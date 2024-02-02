
import * as entity from '../../core/entities/bill.entity';
import { Bill } from '../../db/schema';
import { IGenericRepository } from 'src/core';

export const BillMapper = {

    getAllBill(billsDB: Promise<Bill[]>): Promise<entity.Bill[]> {
        return billsDB.then((bills) => bills.map((bill) => ({
            name: 'name',
            totalAmount: 123,
            paymentPeriod: 'paymentPeriod',
            houseId: 'houseId',
            createdAt: 'createdAt',
            description: 'description',
            house: '',
        })));
    },

    getBillById(billsDB: Promise<Bill>): Promise<entity.Bill> {
        return billsDB.then(() => ({
            name: 'name',
            totalAmount: 123,
            paymentPeriod: 'paymentPeriod',
            houseId: 'houseId',
            createdAt: 'createdAt',
            description: 'description',
            house: '',
        }));
    },

    createBill(billCreated: Promise<Bill>): Promise<entity.Bill> {
        return billCreated.then(() => ({
            name: 'name',
            totalAmount: 123,
            paymentPeriod: 'paymentPeriod',
            houseId: 'houseId',
            createdAt: 'createdAt',
            description: 'description',
            house: '',
        }))
    },

    updateBill(billCreated: Promise<entity.Bill>): Promise<entity.Bill> {
        return billCreated.then(() => ({
            name: 'name',
            totalAmount: 123,
            paymentPeriod: 'paymentPeriod',
            houseId: 'houseId',
            createdAt: 'createdAt',
            description: 'description',
            house: '',
        }))
    }
}
