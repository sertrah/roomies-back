import { Injectable } from '@nestjs/common';
import { Assignment } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateAssignmentDto, UpdateAssignmentDto } from '../../core/dtos';
import { AssignmentFactoryService } from './assignment-factory.service';

@Injectable()
export class AssignmentUseCases {
    constructor(
        private dataServices: IDataServices<Assignment>,
        private assignmentFactoryService: AssignmentFactoryService,
    ) { }

    getAllAssignment(): Promise<Assignment[]> {
        return this.dataServices.assignments.getAll();
    }

    getAssignmentById(id: any): Promise<Assignment> {
        return this.dataServices.assignments.get(id);
    }

    createAssignment(createAssignmentDto: CreateAssignmentDto): Promise<Assignment> {
        const Assignment = this.assignmentFactoryService.createNewAssignment(createAssignmentDto);
        return this.dataServices.assignments.create(Assignment);
    }

    updateAssignment(assignmentId: string, updateAssignmentDto: UpdateAssignmentDto): Promise<Assignment> {
        const Assignment = this.assignmentFactoryService.updateAssignment(updateAssignmentDto);
        return this.dataServices.assignments.update(assignmentId, Assignment);
    }
}
