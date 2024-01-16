import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateRoomiesDto, UpdateRoomiesDto } from '../core/dtos';
import { RoomiesUseCases } from '../uses-cases/roomies/roomies.use-case';

@Controller('api/roomies')
export class RoomiesController {
  constructor(private roomiesUseCases: RoomiesUseCases) { }

  @Get()
  async getAll() {
    this.createRoomies({
      name: 'harlen',
      lastName: 'giraldo',
      tel: '3123123',
      email: 'asdads',
      image: ''
    })
    return this.roomiesUseCases.getAllRoomies();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.roomiesUseCases.getRoomiesById(id);
  }

  @Post()
  createRoomies(@Body() RoomiesDto: CreateRoomiesDto) {
    return this.roomiesUseCases.createRoomies(RoomiesDto);
  }

  @Put(':id')
  updateRoomies(
    @Param('id') clientId: string,
    @Body() updateRoomiesDto: UpdateRoomiesDto,
  ) {
    return this.roomiesUseCases.updateRoomies(clientId, updateRoomiesDto);
  }
}
