import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Book } from './entities/book.entity'
import { BooksController } from './books.controller'
import { BooksService } from './books.service'
import { AccountsModule } from '../accounts/accounts.module'

@Module({
  imports: [TypeOrmModule.forFeature([Book]), AccountsModule],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
