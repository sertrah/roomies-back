import { Injectable } from '@nestjs/common';
import { Roomies } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateRoomiesDto, UpdateRoomiesDto } from '../../core/dtos';
import { RoomiesFactoryService } from './roomies-factory.service';

import { RoomiesMapper } from './roomies.mapper';

@Injectable()
export class RoomiesUseCases {
  constructor(
    private dataServices: IDataServices,
    private roomiesFactoryService: RoomiesFactoryService,
  ) { }


  getAllRoomies(): Promise<Roomies[]> {
    const a = this.dataServices.roomieses.getAll();
    return RoomiesMapper.getAllRoomies(a);

  }

  getRoomiesById(id: any): Promise<Roomies> {
    const a = this.dataServices.roomieses.get(id);
    return RoomiesMapper.getRoomiesById(a);
  }

  createRoomies(createRoomiesDto: CreateRoomiesDto): Promise<Roomies> {
    const Roomies = this.roomiesFactoryService.createNewRoomies(createRoomiesDto);
    const created = this.dataServices.roomieses.create(Roomies);
    return RoomiesMapper.createRoomies(created)
  }

  updateRoomies(RoomiesId: string, updateRoomiesDto: UpdateRoomiesDto): Promise<Roomies> {
    const Roomies = this.roomiesFactoryService.updateRoomies(updateRoomiesDto);
    const roomieCreated = this.dataServices.roomieses.update(RoomiesId, Roomies);
    return RoomiesMapper.updateRoomies(roomieCreated)
  }
}
