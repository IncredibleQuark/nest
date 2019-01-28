import {IsNotEmpty, IsNumberString, IsString} from 'class-validator';

export class CreateUserDto {
    @IsNumberString()
    @IsNotEmpty()
    public readonly id :string;

    @IsString()
    @IsNotEmpty()
    public readonly login: string;
}