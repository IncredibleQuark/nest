import {Injectable} from "@nestjs/common";
import {User} from "./user";

@Injectable()
export class UsersService {
    private readonly users = require('./users.json');
    findAll() {
        return this.users;
    }

    findOne(id: number): User | undefined {
        return this.users.find( (user) => user.id == id)
    }

    create(data: User) {
        this.users.push(data);
    }
}