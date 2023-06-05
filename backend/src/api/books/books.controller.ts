import { BadRequestException, Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiTags, ApiQuery } from '@nestjs/swagger'

import { CreateBookDto } from './dto/createBook.dto'
import { BooksService } from './books.service'

@ApiTags('books')
@Controller('/api/books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get('/')
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'page', required: false, type: Number })
  async get(@Query('limit') limit: number = 6, @Query('page') page: number = 1): Promise<any> {
    try {
      return {
        message: 'Get New Books Successfully',
        data: await this.booksService.find(limit, page),
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<any> {
    try {
      const { name, image, author, description, categoryId } = createBookDto

      await this.booksService.save(name, image, author, description, categoryId)

      return {
        message: 'Create Book Successfully',
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Get('/new')
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'page', required: false, type: Number })
  async getNewBooks(@Query('limit') limit: number = 6, @Query('page') page: number = 1): Promise<any> {
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
