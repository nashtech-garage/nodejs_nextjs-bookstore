import { Module } from '@nestjs/common'

import { ProviderModule } from './provider/provider.module'
import { ApiModule } from './api/api.module'
import { CoreModule } from './core/core.module'

@Module({
  imports: [CoreModule, ProviderModule, ApiModule],
})
export class AppModule {}
