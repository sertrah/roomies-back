import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRoomiesDto {
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

export class UpdateRoomiesDto extends PartialType(CreateRoomiesDto) { }
