import { Module } from '@nestjs/common'
import { AwsSdkModule } from 'nest-aws-sdk'
import { S3 } from 'aws-sdk'
import { ConfigService } from '@nestjs/config'

@Module({
  imports: [
    AwsSdkModule.forRootAsync({
      defaultServiceOptions: {
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          region: configService.get('AWS.REGION'),
          credentials: {
            accessKeyId: configService.get('AWS.ACCESS_KEY_ID'),
            secretAccessKey: configService.get('AWS.SECRET_ACCESS_KEY'),
          },
        }),
      },
      services: [S3],
    }),
  ],
})
export class AwsModule {}
