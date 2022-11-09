import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Client extends Document {
    @Prop()
    firstName: string;
    @Prop()
    lastName: string;
    @Prop()
    email: string;
    @Prop()
    phoneNumber: string;
    @Prop()
    city: string;
    @Prop()
    subCity: string;
    @Prop()
    childName: string;
    @Prop()
    childGrade: string;
    @Prop()
    childGender: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
