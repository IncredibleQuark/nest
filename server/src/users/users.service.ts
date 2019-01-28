import {Inject, Injectable} from "@nestjs/common";
import {User} from "./user";
import {USERS_TOKEN} from "./users.constant";

@Injectable()
export class UsersService {

    constructor(@Inject(USERS_TOKEN) private readonly users: User[]) {}

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