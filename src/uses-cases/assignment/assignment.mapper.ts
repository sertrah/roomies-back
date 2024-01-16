
import * as entity from '../../core/entities/assignment.entity';
import { Assignment } from '../../db/schema';
import { IGenericRepository } from 'src/core';

export const AssignmentMapper = {

    getAllAssignment(assignmentsDB: Promise<Assignment[]>): Promise<entity.Assignment[]> {
        return assignmentsDB.then((assignments) => assignments.map((assignment) => ({
            roommieId: 'roomieId',
            houseId: 'houseId',
            isActive: 'active',
            create_at: 'createAt',
            roomie: 's'
        })));
    },

    getAssignmentById(assignmentsDB: Promise<Assignment>): Promise<entity.Assignment> {
        return assignmentsDB.then(() => ({
            roommieId: 'roomieId',
            houseId: 'houseId',
            isActive: 'active',
            create_at: 'createAt',
            roomie: 's'
        }));
    },

    createAssignment(assignmentCreated: Promise<Assignment>): Promise<entity.Assignment> {
        return assignmentCreated.then(() => ({
            roommieId: 'roomieId',
            houseId: 'houseId',
            isActive: 'active',
            create_at: 'createAt',
            roomie: 's'
        }))
    },

    updateAssignment(assignmentCreated: Promise<entity.Assignment>): Promise<entity.Assignment> {
        return assignmentCreated.then(() => ({
            roommieId: 'roomieId',
            houseId: 'houseId',
            isActive: 'active',
            create_at: 'createAt',
            roomie: 's'
        }))
    }
}
