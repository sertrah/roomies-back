import { Injectable } from '@nestjs/common';
import { Movement } from '../../core/entities';
import { CreateMovementDto, UpdateMovementDto } from '../../core/dtos';

@Injectable()
export class MovementFactoryService {
    createNewMovement(createMovementDto: CreateMovementDto) {
        const newMovement = new Movement();
        newMovement.firstName = createMovementDto.firstName;
        newMovement.lastName = createMovementDto.lastName;
        newMovement.name = createMovementDto.name;
        newMovement.clientId = createMovementDto.clientId;

        return newMovement;
    }

    updateMovement(updateMovementDto: UpdateMovementDto) {
        const newMovement = new Movement();
        newMovement.firstName = updateMovementDto.firstName;
        newMovement.lastName = updateMovementDto.lastName;

        return newMovement;
    }
}
