
import * as entity from '../../core/entities/house.entity';
import { House } from '../../db/schema';
import { IGenericRepository } from 'src/core';

export const HouseMapper = {

    getAllHouse(housesDB: Promise<House[]>): Promise<entity.House[]> {
        return housesDB.then((houses) => houses.map((house) => ({
            address: 'address',
            zipcode: 'zipcode',
            coordinates: 'coordinates',
            assignment: 's',
        })));
    },

    getHouseById(housesDB: Promise<House>): Promise<entity.House> {
        return housesDB.then(() => ({
            address: 'address',
            zipcode: 'zipcode',
            coordinates: 'coordinates',
            assignment: 's',
        }));
    },

    createHouse(houseCreated: Promise<House>): Promise<entity.House> {
        return houseCreated.then(() => ({
            address: 'address',
            zipcode: 'zipcode',
            coordinates: 'coordinates',
            assignment: 's',
        }))
    },

    updateHouse(houseCreated: Promise<entity.House>): Promise<entity.House> {
        return houseCreated.then(() => ({
            address: 'address',
            zipcode: 'zipcode',
            coordinates: 'coordinates',
            assignment: 's',
        }))
    }
}
