import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

//@Injectable(ClientService)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) { }
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  /*
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.userService.findOne(id);
    }
  */

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    //console.log(createClientDto instanceof CreateClientDto);
    return this.userService.create(createUserDto);
  }

  @Delete()
  remove() {
    return this.userService.remove();
  }
}
