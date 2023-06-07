import { BadRequestException, Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { ApiQuery, ApiTags } from '@nestjs/swagger'

import { CategoriesService } from './categories.service'
import { CreateCategoryDto } from './dto/createCategory.dto'
import { BooksService } from '../books/books.service'
import { Auth, Role } from 'src/common'

@ApiTags('categories')
@Controller('/api/categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService, private booksService: BooksService) {}

  @Get()
  async get(): Promise<any> {
    try {
      return {
        message: 'Get Categories Successfully',
        data: await this.categoriesService.find(),
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Auth([Role.Admin, Role.Employer])
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<any> {
    try {
      const { name } = createCategoryDto

      await this.categoriesService.save(name)

      return {
        message: 'Create Category Successfully',
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Get('/:id')
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'page', required: false, type: Number })
  async getBooksByCategoryId(
    @Param('id') id: number,
    @Query('limit') limit: number = 8,
    @Query('page') page: number = 1,
  ): Promise<any> {
    try {
      return {
        message: 'Get Books Successfully',
        data: await this.booksService.findByCategoryId(id, limit, page),
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
