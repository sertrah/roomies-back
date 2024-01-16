import { Injectable } from '@nestjs/common';
import { Assignment } from '../../core/entities';
import { CreateAssignmentDto, UpdateAssignmentDto } from '../../core/dtos';

@Injectable()
export class AssignmentFactoryService {
  createNewAssignment(createAssignmentDto: CreateAssignmentDto) {
    const newAssignment = new Assignment();
    newAssignment.firstName = createAssignmentDto.firstName;
    newAssignment.lastName = createAssignmentDto.lastName;
    newAssignment.name = createAssignmentDto.name;
    newAssignment.clientId = createAssignmentDto.clientId;

    return newAssignment;
  }

  updateAssignment(updateAssignmentDto: UpdateAssignmentDto) {
    const newAssignment = new Assignment();
    newAssignment.firstName = updateAssignmentDto.firstName;
    newAssignment.lastName = updateAssignmentDto.lastName;

    return newAssignment;
  }
}
