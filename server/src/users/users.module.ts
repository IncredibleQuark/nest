import {Module} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UsersController} from "./users.controller";
import {USERS_TOKEN} from "./users.constant";

@Module({
    providers: [UsersService,
        {
            provide: USERS_TOKEN,
            useValue: require('./users.json')
        }],
    controllers: [UsersController]
})
export class UsersModule {

}