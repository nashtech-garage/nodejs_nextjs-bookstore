import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'

export class LoginDto {
  @ApiProperty({ default: 'string@gmail.com' })
  @IsNotEmpty()
  @Length(6, 30)
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @Length(6, 15)
  password: string
}
