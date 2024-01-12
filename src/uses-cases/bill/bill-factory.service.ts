import { Injectable } from '@nestjs/common';
import { Bill } from '../../core/entities';
import { CreateBillDto, UpdateBillDto } from '../../core/dtos';

@Injectable()
export class BillFactoryService {
  createNewBill(createBillDto: CreateBillDto) {
    const newBill = new Bill();
    newBill.name = createBillDto.name;
    newBill.houseId = createBillDto.houseId;
    newBill.description = createBillDto.description;
    newBill.paymentPeriod = createBillDto.paymentPeriod;
    newBill.totalAmount = createBillDto.totalAmount;

    return newBill;
  }

  updateBill(updateBillDto: UpdateBillDto) {
    const newBill = new Bill();
    newBill.name = updateBillDto.name;
    newBill.houseId = updateBillDto.houseId;

    return newBill;
  }
}
