import { Injectable } from '@nestjs/common';
import { Movement } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateMovementDto, UpdateMovementDto } from '../../core/dtos';
import { MovementFactoryService } from './movement-factory.service';

import { MovementMapper } from './movement.mapper';

@Injectable()
export class MovementUseCases {
    constructor(
        private dataServices: IDataServices,
        private movementFactoryService: MovementFactoryService,
    ) { }

    getAllMovement(): Promise<Movement[]> {
        const a = this.dataServices.movements.getAll();
        return MovementMapper.getAllMovement(a);

    }

    getMovementById(id: any): Promise<Movement> {
        const a = this.dataServices.movements.get(id);
        return MovementMapper.getMovementById(a);
    }

    createMovement(createMovementDto: CreateMovementDto): Promise<Movement> {
        const Movement = this.movementFactoryService.createNewMovement(createMovementDto);
        const created = this.dataServices.movements.create(Movement);
        return MovementMapper.createMovement(created)
    }

    updateMovement(MovementId: string, updateMovementDto: UpdateMovementDto): Promise<Movement> {
        const Movement = this.movementFactoryService.updateMovement(updateMovementDto);
        const movementCreated = this.dataServices.movements.update(MovementId, Movement);
        return MovementMapper.updateMovement(movementCreated)
    }
}
