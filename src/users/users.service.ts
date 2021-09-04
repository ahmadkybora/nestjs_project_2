import {Inject, Injectable} from '@nestjs/common';
import {User} from './user.entity';
import {CreateUserDto} from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private usersProviders: typeof User
    ) {}

    async findAll(): Promise<User[]> {
        return this.usersProviders.findAll<User>();
    }

    create(user: CreateUserDto) {
        //this.users.push(user);
    }

    findById(){

    }
}
