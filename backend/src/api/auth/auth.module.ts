import { Module } from '@nestjs/common'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AccountsModule } from '../accounts/accounts.module'

@Module({
  imports: [AccountsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
