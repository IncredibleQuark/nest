import {HttpException, Inject, Injectable, NotFoundException} from "@nestjs/common";
import {User} from "./user";
import {USERS_TOKEN} from "./users.constant";

@Injectable()
export class UsersService {

    constructor(@Inject(USERS_TOKEN) private readonly users: User[]) {}

    findAll() {
        return this.users;
    }

    findOne(id: number): User | undefined {
        const user = this.users.find( (user) => user.id == id);
        if (!user) {
            throw new NotFoundException()
        }
        return user;
    }

    create(data: User) {
        this.users.push(data);
    }
}