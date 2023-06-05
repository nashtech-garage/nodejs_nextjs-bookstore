import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length } from 'class-validator'

export class LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(6, 15)
  username: string

  @ApiProperty()
  @IsNotEmpty()
  @Length(6, 15)
  password: string
}
