import { Injectable } from '@nestjs/common';
import { Movement } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateMovementDto, UpdateMovementDto } from '../../core/dtos';
import { MovementFactoryService } from './movement-factory.service';

@Injectable()
export class MovementUseCases {
    constructor(
        private dataServices: IDataServices<Movement>,
        private movementFactoryService: MovementFactoryService,
    ) { }

    getAllMovement(): Promise<Movement[]> {
        return this.dataServices.movements.getAll();
    }

    getMovementById(id: any): Promise<Movement> {
        return this.dataServices.movements.get(id);
    }

    createMovement(createMovementDto: CreateMovementDto): Promise<Movement> {
        const Movement = this.movementFactoryService.createNewMovement(createMovementDto);
        return this.dataServices.movements.create(Movement);
    }

    updateMovement(MovementId: string, updateMovementDto: UpdateMovementDto): Promise<Movement> {
        const Movement = this.movementFactoryService.updateMovement(updateMovementDto);
        return this.dataServices.movements.update(MovementId, Movement);
    }
}
