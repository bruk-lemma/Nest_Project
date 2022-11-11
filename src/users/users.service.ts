import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
//export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) { }
  /*
    private readonly users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'maria',
        password: 'guess',
      },
    ];
  */
  async findAll() {
    const users = await this.userModel.find().exec();
    return users;
  }

  async findOne({ email, password }): Promise<User | undefined> {
    //return this.users.find((user) => user.username === username);
    const user = await this.userModel.findOne({ email, password });
    if (!user) {
      throw new NotFoundException(`user ${email} does not exist`);
    }
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async remove() {
    await this.userModel.deleteMany();
    //return user.remove();
  }
}
