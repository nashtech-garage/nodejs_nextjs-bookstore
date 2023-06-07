import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CategoriesController } from './categories.controller'
import { CategoriesService } from './categories.service'
import { Category } from './entities/category.entity'
import { BooksModule } from '../books/books.module'
import { AccountsModule } from '../accounts/accounts.module'

@Module({
  imports: [TypeOrmModule.forFeature([Category]), BooksModule, AccountsModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
