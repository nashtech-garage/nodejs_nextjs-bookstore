import { Module } from '@nestjs/common'

import { ConfigModule } from './config/config.module'
import { ProviderModule } from './provider/provider.module'
import { ApiModule } from './api/api.module'

@Module({
  imports: [ConfigModule, ProviderModule, ApiModule],
})
export class AppModule {}
