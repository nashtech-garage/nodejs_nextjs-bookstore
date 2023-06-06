import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsEnum, IsMobilePhone, IsNotEmpty, Length } from 'class-validator'
import { Role } from 'src/common'

export class CreateDto {
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

  @ApiProperty({ default: 'CUSTOMER' })
  @IsEnum(Role)
  role: Role

  @ApiProperty()
  @IsNotEmpty()
  active: boolean
}
