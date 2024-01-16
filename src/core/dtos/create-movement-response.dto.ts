import { Movement } from '../entities';

export class CreateMovementResponseDto {
    success: boolean;

    createdRoomies: Movement;
}
