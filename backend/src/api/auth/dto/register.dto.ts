import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length, IsMobilePhone } from 'class-validator'

export class RegisterDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(6, 15)
  username: string

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

  @ApiProperty({default: '123 A Street, 1 Ward, 1 District, A City'})
  @IsNotEmpty()
  @Length(12, 100)
  address: string
}
