import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsNumber, Min } from 'class-validator'

import { IsLessThan } from 'src/common'

export class CreateBookDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string

  @ApiProperty({ type: 'string', format: 'binary', required: true })
  image: string

  @ApiProperty()
  @IsNotEmpty()
  author: string

  @ApiProperty()
  @IsNotEmpty()
  description: string

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price: number

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsLessThan('price')
  salePrice: number

  @ApiProperty()
  @IsNotEmpty()
  categoryId: number
}
