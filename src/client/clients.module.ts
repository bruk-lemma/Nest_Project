import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { Client, ClientSchema } from './entities/client.entity';
//@Global()
@Module({
    imports: [

        MongooseModule.forFeature([
            {
                name: Client.name,
                schema: ClientSchema,
            },
        ]),
    ],
    controllers: [ClientController],
    providers: [ClientService],
    //exports: [ClientService],
})
export class ClientsModule { }
