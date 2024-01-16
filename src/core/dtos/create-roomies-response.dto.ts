import { Roomies } from '../entities';

export class CreateRoomiesResponseDto {
  success: boolean;

  createdRoomies: Roomies;
}
