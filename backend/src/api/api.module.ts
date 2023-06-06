import { Module } from '@nestjs/common'

import { AccountsModule } from './accounts/accounts.module'
import { AuthModule } from './auth/auth.module'
import { MetaModule } from './meta/meta.module'
import { CategoriesModule } from './categories/categories.module'
import { BooksModule } from './books/books.module'

@Module({
  imports: [MetaModule, AuthModule, AccountsModule, CategoriesModule, BooksModule],
})
export class ApiModule {}
