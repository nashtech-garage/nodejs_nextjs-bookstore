import { Module } from '@nestjs/common'

import { ConfigModule } from './config/config.module'
import { JwtModule } from './jwt/jwt.module'
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [ConfigModule, JwtModule, AwsModule],
})
export class CoreModule {}
