import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBillDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    totalAmount: number;

    @IsString()
    @IsNotEmpty()
    paymentPeriod: string;

    @IsString()
    houseId: string;

    @IsString()
    createdAt: string;

    @IsString()
    description: string;

    house: any;
}

export class UpdateBillDto extends PartialType(CreateBillDto) { }
