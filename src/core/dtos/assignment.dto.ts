import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAssignmentDto {
    @IsString()
    @IsNotEmpty()
    roommieId: string;

    @IsString()
    @IsNotEmpty()
    houseId: string;

    @IsString()
    @IsNotEmpty()
    isActive: string;

    @IsString()
    create_at: string;

    roomie: any;

}

export class UpdateAssignmentDto extends PartialType(CreateAssignmentDto) { }
