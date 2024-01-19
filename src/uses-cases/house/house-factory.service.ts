import { Injectable } from '@nestjs/common';
import { House } from '../../core/entities';
import { CreateHouseDto, UpdateHouseDto } from '../../core/dtos';

@Injectable()
export class HouseFactoryService {
    createNewHouse(createHouseDto: CreateHouseDto) {
        const newHouse = new House();
        newHouse.address = createHouseDto.address;
        newHouse.coordinates = createHouseDto.coordinates;
        newHouse.zipcode = createHouseDto.zipcode;

        return newHouse;
    }

    updateHouse(updateHouseDto: UpdateHouseDto) {
        const newHouse = new House();
        newHouse.address = updateHouseDto.address;
        newHouse.coordinates = updateHouseDto.coordinates;

        return newHouse;
    }
}
