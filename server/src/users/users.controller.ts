import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {User} from "./user";

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
    create(@Body() data: User) {
        this.usersService.create(data)
    }
}