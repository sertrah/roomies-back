import { Bill } from '../entities';

export class CreateBillResponseDto {
    success: boolean;

    createdBill: Bill;
}
