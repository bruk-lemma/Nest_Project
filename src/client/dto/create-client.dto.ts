import { IsString } from 'class-validator';
export class CreateClientDto {
  @IsString()
  readonly firstName: string;
  @IsString()
  readonly lastName: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly phoneNumber: string;
  @IsString()
  readonly city: string;
  @IsString()
  readonly subCity: string;
  @IsString()
  readonly childName: string;
  @IsString()
  readonly childGrade: string;
  @IsString()
  readonly childGender: string;
}
