import { Global, Module } from '@nestjs/common'
import { JwtModule as NestJwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Global()
@Module({
  imports: [
    NestJwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: configService.get('SERVER.JWT.SECRET'),
        signOptions: { expiresIn: configService.get('SERVER.JWT.EXPIRES_IN') },
      }),
    }),
  ],
  exports: [NestJwtModule],
})
export class JwtModule {}
