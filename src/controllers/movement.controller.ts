import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateMovementDto, UpdateMovementDto } from '../core/dtos';
import { MovementUseCases } from '../uses-cases/movement/movement.use-case';

@Controller('api/movement')
export class MovementController {

    constructor(private movementUseCases: MovementUseCases) { }

    @Get()
    async getAll() {
        this.createMovement({ firstName: 'prueba', lastName: 'test', name: 'test2', clientId: '2322' })
        return this.movementUseCases.getAllMovement();
    }

    @Get(':id')
    async getById(@Param('id') id: any) {
        return this.movementUseCases.getMovementById(id);
    }

    @Post()
    createMovement(@Body() MovementDto: CreateMovementDto) {
        return this.movementUseCases.createMovement(MovementDto);
    }

    @Put(':id')
    updateMovement(
        @Param('id') clientId: string,
        @Body() updateMovementDto: UpdateMovementDto,
    ) {
        return this.movementUseCases.updateMovement(clientId, updateMovementDto);
    }
}
