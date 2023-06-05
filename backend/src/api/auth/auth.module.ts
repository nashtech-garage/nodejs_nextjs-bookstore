import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AccountsModule } from '../accounts/accounts.module'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    AccountsModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: configService.get('SERVER.JWT.SECRET'),
        signOptions: { expiresIn: configService.get('SERVER.JWT.EXPIRES_IN') },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
