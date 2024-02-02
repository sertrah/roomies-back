import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateHouseDto, UpdateHouseDto } from '../core/dtos';
import { HouseUseCases } from '../uses-cases/house/house.use-case';

@Controller('api/house')
export class HouseController {

    constructor(private houseUseCases: HouseUseCases) { }

    @Get()
    async getAll() {
        return this.houseUseCases.getAllHouse();
    }

    @Get(':id')
    async getById(@Param('id') id: any) {
        return this.houseUseCases.getHouseById(id);
    }

    @Post()
    createHouse(@Body() HouseDto: CreateHouseDto) {
        return this.houseUseCases.createHouse(HouseDto);
    }

    @Put(':id')
    updateHouse(
        @Param('id') clientId: string,
        @Body() updateHouseDto: UpdateHouseDto,
    ) {
        return this.houseUseCases.updateHouse(clientId, updateHouseDto);
    }
}
