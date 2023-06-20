import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, Min } from 'class-validator'

import { IsLessThan } from 'src/common'

export class CreateBookDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  image: string

  @ApiProperty()
  @IsNotEmpty()
  author: string

  @ApiProperty()
  @IsNotEmpty()
  description: string

  @ApiProperty()
  @IsNumber()
  @Min(0)
  price: number

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @IsLessThan('price')
  salePrice: number

  @ApiProperty()
  @IsNotEmpty()
  categoryId: number
}
