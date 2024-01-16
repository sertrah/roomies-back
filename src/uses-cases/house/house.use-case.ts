import { Injectable } from '@nestjs/common';
import { House } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateHouseDto, UpdateHouseDto } from '../../core/dtos';
import { HouseFactoryService } from './house-factory.service';

@Injectable()
export class HouseUseCases {
  constructor(
    private dataServices: IDataServices<House>,
    private houseFactoryService: HouseFactoryService,
  ) { }

  getAllHouses(): Promise<House[]> {
    return this.dataServices.houses.getAll();
  }

  getHouseById(id: any): Promise<House> {
    return this.dataServices.houses.get(id);
  }

  createHouse(createHouseDto: CreateHouseDto): Promise<House> {
    const house = this.houseFactoryService.createNewHouse(createHouseDto);
    return this.dataServices.houses.create(house);
  }

  updateHouse(HouseId: string, updateHouseDto: UpdateHouseDto): Promise<House> {
    const house = this.houseFactoryService.updateHouse(updateHouseDto);
    return this.dataServices.houses.update(HouseId, house);
  }
}
