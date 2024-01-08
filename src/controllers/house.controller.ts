import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateHouseDto, UpdateHouseDto } from '../core/dtos';
import { HouseUseCases } from '../uses-cases/house/house.use-case';

@Controller('api/House')
export class HouseController {
    constructor(private houseUseCases: HouseUseCases) { }

    @Get()
    async getAll() {
        this.createHouse({ firstName: 'prueba', lastName: 'test', name: 'test2', clientId: '232' })
        return this.houseUseCases.getAllHouses();
    }

    @Get(':id')
    async getById(@Param('id') id: any) {
        return this.houseUseCases.getHouseById(id);
    }

    @Post()
    createHouse(@Body() houseDto: CreateHouseDto) {
        return this.houseUseCases.createHouse(houseDto);
    }

    @Put(':id')
    updateHouse(
        @Param('id') houseId: string,
        @Body() updateHouseDto: UpdateHouseDto,
    ) {
        return this.houseUseCases.updateHouse(houseId, updateHouseDto);
    }
}
