
import * as entity from '../../core/entities/assignment.entity';
import { Assignment } from '../../db/model';
import { IGenericRepository } from 'src/core';

export const AssignmentMapper = {

    getAllAssignment(assignmentsDB: Promise<Assignment[]>): Promise<entity.Assignment[]> {
        return assignmentsDB.then((assignments) => assignments.map((assignment) => ({
            roommieId: 'roomieId',
            houseId: 'houseId',
            isActive: 'active',
            create_at: 'createAt',
        })));
    },

    getAssignmentById(assignmentsDB: Promise<Assignment>): Promise<entity.Assignment> {
        return assignmentsDB.then(() => ({
            roommieId: 'roomieId',
            houseId: 'houseId',
            isActive: 'active',
            create_at: 'createAt',
        }));
    },

    createAssignment(assignmentCreated: Promise<Assignment>): Promise<entity.Assignment> {
        return assignmentCreated.then(() => ({
            roommieId: 'roomieId',
            houseId: 'houseId',
            isActive: 'active',
            create_at: 'createAt',
        }))
    },

    updateAssignment(assignmentCreated: Promise<entity.Assignment>): Promise<entity.Assignment> {
        return assignmentCreated.then(() => ({
            roommieId: 'roomieId',
            houseId: 'houseId',
            isActive: 'active',
            create_at: 'createAt',
        }))
    }
}
