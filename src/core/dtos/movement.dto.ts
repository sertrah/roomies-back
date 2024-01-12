import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateMovementDto {
    @IsString()
    @IsNotEmpty()
    photo: string;

    @IsString()
    @IsNotEmpty()
    amount: number;

    @IsString()
    @IsNotEmpty()
    movementType: string;

    @IsString()
    billsId: string;


    @IsString()
    assignmentId: string;

}

export class UpdateMovementDto extends PartialType(CreateMovementDto) { }
