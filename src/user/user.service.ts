import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ){}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({
      firstname: createUserDto.firstname,
      lastname: createUserDto.lastname,
      email: createUserDto.email,
      password: createUserDto.password,
    });
  }

  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOneById(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        email,
      }
    })
  }

  /* update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  } */
}
