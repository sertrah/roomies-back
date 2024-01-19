import { Movement } from '../entities';

export class CreateMovementResponseDto {
    success: boolean;

    createdMovement: Movement;
}
