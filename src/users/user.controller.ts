import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

//@Injectable(ClientService)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) { }
  @Get()
  @UseGuards(JwtAuthGuard)
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

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
  @Delete()
  remove() {
    return this.userService.remove();
  }
}
