import { Bill } from '../entities';

export class CreateBillResponseDto {
    success: boolean;

    createdRoomies: Bill;
}
