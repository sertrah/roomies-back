import { Assignment } from '../entities';

export class CreateAssignmentResponseDto {
    success: boolean;

    createdRoomies: Assignment;
}
