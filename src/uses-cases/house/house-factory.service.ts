import { Injectable } from '@nestjs/common';
import { House } from '../../core/entities';
import { CreateHouseDto, UpdateHouseDto } from '../../core/dtos';

@Injectable()
export class HouseFactoryService {
  createNewHouse(createHouseDto: CreateHouseDto) {
    const newHouse = new House();
    newHouse.firstName = createHouseDto.firstName;
    newHouse.lastName = createHouseDto.lastName;
    newHouse.name = createHouseDto.name;
    newHouse.clientId = createHouseDto.clientId;

    return newHouse;
  }

  updateHouse(updateHouseDto: UpdateHouseDto) {
    const newHouse = new House();
    newHouse.firstName = updateHouseDto.firstName;
    newHouse.lastName = updateHouseDto.lastName;

    return newHouse;
  }
}
