
import * as entity from '../../core/entities/roomies.entity';
import { Roomie } from '../../db/schema';
import { IGenericRepository } from 'src/core';

export const RoomiesMapper = {

    getAllRoomies(roomiesDB: Promise<Roomie[]>): Promise<entity.Roomies[]> {
        return roomiesDB.then((roomies) => roomies.map((roomie) => ({
            name: 'name',
            lastName: 'lastName',
            email: 'email',
            image: 'image',
            tel: 'tel',
        })));
    },

    getRoomiesById(roomiesDB: Promise<Roomie>): Promise<entity.Roomies> {
        return roomiesDB.then(() => ({
            name: 'name',
            lastName: 'lastName',
            email: 'email',
            image: 'image',
            tel: 'tel',
        }));
    },

    createRoomies(roomieCreated: Promise<Roomie>): Promise<entity.Roomies> {
        return roomieCreated.then(() => ({
            name: 'name',
            lastName: 'lastName',
            email: 'email',
            image: 'image',
            tel: 'tel',
        }))
    },

    updateRoomies(roomieCreated: Promise<entity.Roomies>): Promise<entity.Roomies> {
        return roomieCreated.then(() => ({
            name: 'name',
            lastName: 'lastName',
            email: 'email',
            image: 'image',
            tel: 'tel',
        }))
    }
}
