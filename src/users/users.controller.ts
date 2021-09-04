import {Controller, Get, Post, Param, Body} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {User} from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private usersServices: UsersService) {
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.usersServices.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersServices.findAll();
    }

    /*@Get('id')
    async findOne(@Param('id') id: number): string {}*/
}
