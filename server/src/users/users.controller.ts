import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {User} from "./user";
import {CreateUserDto} from "./create-user.dto";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(): User[] {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id :number): User | undefined {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() userDto: CreateUserDto) {
        console.log(userDto);
        // this.usersService.create(userDto)
    }
}