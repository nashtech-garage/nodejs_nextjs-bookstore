import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length, IsMobilePhone, IsEmail } from 'class-validator'

export class RegisterDto {
  @ApiProperty({ default: 'string@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  @Length(6, 30)
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @Length(6, 15)
  password: string

  @ApiProperty()
  @IsNotEmpty()
  @Length(6, 30)
  fullName: string

  @ApiProperty({ default: '0987654321' })
  @IsNotEmpty()
  @IsMobilePhone('vi-VN')
  phone: string

  @ApiProperty({ default: '123 A Street, 1 Ward, 1 District, A City' })
  @IsNotEmpty()
  @Length(12, 100)
  address: string
}
