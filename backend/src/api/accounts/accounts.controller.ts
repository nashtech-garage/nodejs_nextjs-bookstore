import { BadRequestException, Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiQuery, ApiTags } from '@nestjs/swagger'

import { Auth, Role } from 'src/common'
import { AccountsService } from './accounts.service'
import { CreateDto } from './dto/create.dto'

@Auth([Role.Admin])
@ApiTags('accounts')
@Controller('/api/accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

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
        data: await this.accountsService.find(search, limit, page),
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Post('/')
  async create(@Body() createDto: CreateDto): Promise<any> {
    try {
      const { email, password, fullName, phone, address, role, active } = createDto

      await this.accountsService.save(email, password, fullName, phone, address, role, active)

      return {
        message: 'Create Account Successfully',
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
