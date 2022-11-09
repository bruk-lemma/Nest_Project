import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './client/client.controller';
import { ClientService } from './client/client.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './client/clients.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ClientsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/clients'),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
