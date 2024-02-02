import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateHouseDto {
    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    zipcode: string;

    @IsString()
    @IsNotEmpty()
    coordinates: string;

    assignment: any;
}

export class UpdateHouseDto extends PartialType(CreateHouseDto) { }
