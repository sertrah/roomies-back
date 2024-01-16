import { Injectable } from '@nestjs/common';
import { Roomies } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateRoomiesDto, UpdateRoomiesDto } from '../../core/dtos';
import { RoomiesFactoryService } from './roomies-factory.service';

@Injectable()
export class RoomiesUseCases {
  constructor(
    private dataServices: IDataServices<Roomies>,
    private roomiesFactoryService: RoomiesFactoryService,
  ) { }

  getAllRoomies(): Promise<Roomies[]> {
    return this.dataServices.roomieses.getAll();
  }

  getRoomiesById(id: any): Promise<Roomies> {
    return this.dataServices.roomieses.get(id);
  }

  createRoomies(createRoomiesDto: CreateRoomiesDto): Promise<Roomies> {
    const Roomies = this.roomiesFactoryService.createNewRoomies(createRoomiesDto);
    return this.dataServices.roomieses.create(Roomies);
  }

  updateRoomies(RoomiesId: string, updateRoomiesDto: UpdateRoomiesDto): Promise<Roomies> {
    const Roomies = this.roomiesFactoryService.updateRoomies(updateRoomiesDto);
    return this.dataServices.roomieses.update(RoomiesId, Roomies);
  }
}
