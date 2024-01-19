
import * as entity from '../../core/entities/user.entity';
import { User } from '../../db/schema';
import { IGenericRepository } from 'src/core';

export const UserMapper = {

    getAllUser(usersDB: Promise<User[]>): Promise<entity.User[]> {
        return usersDB.then((users) => users.map((user) => ({
            username: 'name',
            passwd: 'passwd',
            roomieId: '',
        })));
    },

    getUserById(usersDB: Promise<User>): Promise<entity.User> {
        return usersDB.then(() => ({
            username: 'name',
            passwd: 'passwd',
            roomieId: '',
        }));
    },

    createUser(userCreated: Promise<User>): Promise<entity.User> {
        return userCreated.then(() => ({
            username: 'name',
            passwd: 'passwd',
            roomieId: '',
        }))
    },

    updateUser(userCreated: Promise<entity.User>): Promise<entity.User> {
        return userCreated.then(() => ({
            username: 'name',
            passwd: 'passwd',
            roomieId: '',
        }))
    }
}
