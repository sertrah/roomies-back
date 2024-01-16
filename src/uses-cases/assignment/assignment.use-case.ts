import { Injectable } from '@nestjs/common';
import { Assignment } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateAssignmentDto, UpdateAssignmentDto } from '../../core/dtos';
import { AssignmentFactoryService } from './assignment-factory.service';

import { AssignmentMapper } from './assignment.mapper';

@Injectable()
export class AssignmentUseCases {
    constructor(
        private dataServices: IDataServices,
        private assignmentFactoryService: AssignmentFactoryService,
    ) { }

    getAllAssignment(): Promise<Assignment[]> {
        const a = this.dataServices.assignments.getAll();
        return AssignmentMapper.getAllAssignment(a);

    }

    getAssignmentById(id: any): Promise<Assignment> {
        const a = this.dataServices.assignments.get(id);
        return AssignmentMapper.getAssignmentById(a);
    }

    createAssignment(createAssignmentDto: CreateAssignmentDto): Promise<Assignment> {
        const Assignment = this.assignmentFactoryService.createNewAssignment(createAssignmentDto);
        const created = this.dataServices.assignments.create(Assignment);
        return AssignmentMapper.createAssignment(created)
    }

    updateAssignment(AssignmentId: string, updateAssignmentDto: UpdateAssignmentDto): Promise<Assignment> {
        const Assignment = this.assignmentFactoryService.updateAssignment(updateAssignmentDto);
        const assignmentCreated = this.dataServices.assignments.update(AssignmentId, Assignment);
        return AssignmentMapper.updateAssignment(assignmentCreated)
    }
}
