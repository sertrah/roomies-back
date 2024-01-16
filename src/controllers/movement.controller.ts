import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateMovementDto, UpdateMovementDto } from '../core/dtos';
import { MovementUseCases } from '../uses-cases/movement/movement.use-case';

@Controller('api/movement')
export class MovementController {

    constructor(private movementUseCases: MovementUseCases) { }

    @Get()
    async getAll() {
        //this.createMovement({ name: 'prueba2', lastName: 'test', email: 'testing@', image: 'www', tel: '323' })
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
        @Param('id') assignmentId: string,
        @Body() updateMovementDto: UpdateMovementDto,
    ) {
        return this.movementUseCases.updateMovement(assignmentId, updateMovementDto);
    }
}
