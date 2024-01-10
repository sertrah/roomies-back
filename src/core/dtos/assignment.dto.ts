import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAssignmentDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    clientId: string;

}

export class UpdateAssignmentDto extends PartialType(CreateAssignmentDto) { }
