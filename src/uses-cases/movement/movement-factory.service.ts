import { Injectable } from '@nestjs/common';
import { Movement } from '../../core/entities';
import { CreateMovementDto, UpdateMovementDto } from '../../core/dtos';

@Injectable()
export class MovementFactoryService {
    createNewMovement(createMovementDto: CreateMovementDto) {
        const newMovement = new Movement();
        newMovement.amount = createMovementDto.amount;
        newMovement.movementType = createMovementDto.movementType;
        newMovement.photo = createMovementDto.photo;
        newMovement.assignmentId = createMovementDto.assignmentId;
        newMovement.billsId = createMovementDto.billsId;
        return newMovement;
    }

    updateMovement(updateMovementDto: UpdateMovementDto) {
        const newMovement = new Movement();
        newMovement.movementType = updateMovementDto.movementType;
        newMovement.photo = updateMovementDto.photo;

        return newMovement;
    }
}
