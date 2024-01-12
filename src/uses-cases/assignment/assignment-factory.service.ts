import { Injectable } from '@nestjs/common';
import { Assignment } from '../../core/entities';
import { CreateAssignmentDto, UpdateAssignmentDto } from '../../core/dtos';

@Injectable()
export class AssignmentFactoryService {
  createNewAssignment(createAssignmentDto: CreateAssignmentDto) {
    const newAssignment = new Assignment();
    newAssignment.roommieId = createAssignmentDto.roommieId;
    newAssignment.houseId = createAssignmentDto.houseId;
    newAssignment.isActive = createAssignmentDto.isActive;
    newAssignment.create_at = createAssignmentDto.create_at;

    return newAssignment;
  }

  updateAssignment(updateAssignmentDto: UpdateAssignmentDto) {
    const newAssignment = new Assignment();
    newAssignment.roommieId = updateAssignmentDto.roommieId;
    newAssignment.houseId = updateAssignmentDto.houseId;

    return newAssignment;
  }
}
