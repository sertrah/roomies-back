import { Injectable } from '@nestjs/common';
import { Roomies } from '../../core/entities';
import { CreateRoomiesDto, UpdateRoomiesDto } from '../../core/dtos';

@Injectable()
export class RoomiesFactoryService {
  createNewRoomies(createRoomiesDto: CreateRoomiesDto) {
    const newRoomies = new Roomies();
    newRoomies.name = createRoomiesDto.name;
    newRoomies.lastName = createRoomiesDto.lastName;
    newRoomies.image = createRoomiesDto.image;
    newRoomies.email = createRoomiesDto.email;
    newRoomies.tel = createRoomiesDto.tel;

    return newRoomies;
  }

  updateRoomies(updateRoomiesDto: UpdateRoomiesDto) {
    const newRoomies = new Roomies();
    newRoomies.name = updateRoomiesDto.name;
    newRoomies.tel = updateRoomiesDto.tel;

    return newRoomies;
  }
}
