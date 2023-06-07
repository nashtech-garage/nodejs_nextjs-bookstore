import { BadRequestException, Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common'
import { ApiTags, ApiQuery } from '@nestjs/swagger'

import { CreateBookDto } from './dto/createBook.dto'
import { BooksService } from './books.service'
import { Role, Auth } from 'src/common'

@ApiTags('books')
@Controller('/api/books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get('/')
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'page', required: false, type: Number })
  async get(
    @Query('search') search: string = '',
    @Query('limit') limit: number = 8,
    @Query('page') page: number = 1,
  ): Promise<any> {
    try {
      return {
        message: 'Get Books Successfully',
        data: await this.booksService.find(search, limit, page),
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Auth([Role.Admin, Role.Employer])
  @Post()
  async create(@Request() req, @Body() createBookDto: CreateBookDto): Promise<any> {
    try {
      const { name, image, author, description, categoryId } = createBookDto
      const { email } = req.user

      await this.booksService.save(name, image, author, description, categoryId, email)

      return {
        message: 'Create Book Successfully',
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Get('/:id')
  async getDetail(@Param('id') id: number): Promise<any> {
    try {
      return {
        message: 'Get Book Detail Successfully',
        data: await this.booksService.findOne(id),
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Get('/new')
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'page', required: false, type: Number })
  async getNewBooks(@Query('limit') limit: number = 8, @Query('page') page: number = 1): Promise<any> {
    try {
      return {
        message: 'Get New Books Successfully',
        data: await this.booksService.findNewBooks(limit, page),
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
