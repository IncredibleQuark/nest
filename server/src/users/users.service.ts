import {Injectable} from "@nestjs/common";

@Injectable()
export class UsersService {
    private readonly users = require('./users.json');
    findAll() {
        return this.users;
    }
}