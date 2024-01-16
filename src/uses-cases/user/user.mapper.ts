
import * as entity from '../../core/entities/user.entity';
import { User } from '../../db/model';
import { IGenericRepository } from 'src/core';

export const UserMapper = {

    getAllUser(usersDB: Promise<User[]>): Promise<entity.User[]> {
        return usersDB.then((users) => users.map((user) => ({
            username: 'name',
            passwd: 'passwd',
        })));
    },

    getUserById(usersDB: Promise<User>): Promise<entity.User> {
        return usersDB.then(() => ({
            username: 'name',
            passwd: 'passwd',
        }));
    },

    createUser(userCreated: Promise<User>): Promise<entity.User> {
        return userCreated.then(() => ({
            username: 'name',
            passwd: 'passwd',
        }))
    },

    updateUser(userCreated: Promise<entity.User>): Promise<entity.User> {
        return userCreated.then(() => ({
            username: 'name',
            passwd: 'passwd',
        }))
    }
}
