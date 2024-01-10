import { Injectable } from '@nestjs/common';
import { Roomies } from '../../core/entities';
import { CreateRoomiesDto, UpdateRoomiesDto } from '../../core/dtos';

@Injectable()
export class RoomiesFactoryService {
  createNewRoomies(createRoomiesDto: CreateRoomiesDto) {
    const newRoomies = new Roomies();
    newRoomies.firstName = createRoomiesDto.firstName;
    newRoomies.lastName = createRoomiesDto.lastName;
    newRoomies.name = createRoomiesDto.name;
    newRoomies.clientId = createRoomiesDto.clientId;

    return newRoomies;
  }

  updateRoomies(updateRoomiesDto: UpdateRoomiesDto) {
    const newRoomies = new Roomies();
    newRoomies.firstName = updateRoomiesDto.firstName;
    newRoomies.lastName = updateRoomiesDto.lastName;

    return newRoomies;
  }
}
