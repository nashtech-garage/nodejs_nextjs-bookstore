import { Module } from '@nestjs/common'

import { ConfigModule } from './config/config.module'
import { ProviderModule } from './provider/provider.module'
import { ApiModule } from './api/api.module'
import { JwtModule } from './config/jwt.module'

@Module({
  imports: [ConfigModule, JwtModule, ProviderModule, ApiModule],
})
export class AppModule {}
