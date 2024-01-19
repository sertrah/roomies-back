import { Injectable } from '@nestjs/common';
import { House } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateHouseDto, UpdateHouseDto } from '../../core/dtos';
import { HouseFactoryService } from './house-factory.service';

import { HouseMapper } from './house.mapper';

@Injectable()
export class HouseUseCases {
    constructor(
        private dataServices: IDataServices,
        private houseFactoryService: HouseFactoryService,
    ) { }

    getAllHouse(): Promise<House[]> {
        const a = this.dataServices.houses.getAll();
        return HouseMapper.getAllHouse(a);

    }

    getHouseById(id: any): Promise<House> {
        const a = this.dataServices.houses.get(id);
        return HouseMapper.getHouseById(a);
    }

    createHouse(createHouseDto: CreateHouseDto): Promise<House> {
        const House = this.houseFactoryService.createNewHouse(createHouseDto);
        const created = this.dataServices.houses.create(House);
        return HouseMapper.createHouse(created)
    }

    updateHouse(HouseId: string, updateHouseDto: UpdateHouseDto): Promise<House> {
        const House = this.houseFactoryService.updateHouse(updateHouseDto);
        const houseCreated = this.dataServices.houses.update(HouseId, House);
        return HouseMapper.updateHouse(houseCreated)
    }
}
