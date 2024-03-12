import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstname: string;
    
    @IsString()
    @IsNotEmpty()
    lastname: string;
    
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;

    address: string;
}
