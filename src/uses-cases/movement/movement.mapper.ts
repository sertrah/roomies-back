
import * as entity from '../../core/entities/movement.entity';
import { Movement } from '../../db/model';
import { IGenericRepository } from 'src/core';

export const MovementMapper = {

    getAllMovement(movementsDB: Promise<Movement[]>): Promise<entity.Movement[]> {
        return movementsDB.then((movements) => movements.map((movement) => ({
            photo: 'photo',
            amount: 123,
            movementType: 'movementtype',
            billsId: 'billsid',
            assignmentId: 'assignmentId',
        })));
    },

    getMovementById(movementsDB: Promise<Movement>): Promise<entity.Movement> {
        return movementsDB.then(() => ({
            photo: 'photo',
            amount: 123,
            movementType: 'movementtype',
            billsId: 'billsid',
            assignmentId: 'assignmentId',
        }));
    },

    createMovement(movementCreated: Promise<Movement>): Promise<entity.Movement> {
        return movementCreated.then(() => ({
            photo: 'photo',
            amount: 123,
            movementType: 'movementtype',
            billsId: 'billsid',
            assignmentId: 'assignmentId',
        }))
    },

    updateMovement(movementCreated: Promise<entity.Movement>): Promise<entity.Movement> {
        return movementCreated.then(() => ({
            photo: 'photo',
            amount: 123,
            movementType: 'movementtype',
            billsId: 'billsid',
            assignmentId: 'assignmentId',
        }))
    }
}
