import { Injectable } from '@nestjs/common';
import { Bill } from '../../core/entities';
import { CreateBillDto, UpdateBillDto } from '../../core/dtos';

@Injectable()
export class BillFactoryService {
  createNewBill(createBillDto: CreateBillDto) {
    const newBill = new Bill();
    newBill.firstName = createBillDto.firstName;
    newBill.lastName = createBillDto.lastName;
    newBill.name = createBillDto.name;
    newBill.clientId = createBillDto.clientId;

    return newBill;
  }

  updateBill(updateBillDto: UpdateBillDto) {
    const newBill = new Bill();
    newBill.firstName = updateBillDto.firstName;
    newBill.lastName = updateBillDto.lastName;

    return newBill;
  }
}
