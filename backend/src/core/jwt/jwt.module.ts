import { Global, Module } from '@nestjs/common'
import { JwtModule as NestJwtModule } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

@Global()
@Module({
  imports: [
    NestJwtModule.registerAsync({
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
