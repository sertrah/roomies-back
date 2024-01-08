import { House } from '../entities';

export class CreateHouseResponseDto {
    success: boolean;

    createdHouse: House;
}
