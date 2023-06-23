import { Module } from '@nestjs/common'

import { ConfigModule } from './config/config.module'
import { JwtModule } from './jwt/jwt.module'

@Module({
  imports: [ConfigModule, JwtModule],
})
export class CoreModule {}
