import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('meta')
@Controller('meta')
export class MetaController {
  @Get('readiness')
  getReady(): string {
    return 'READY'
  }

  @Get('liveness')
  getLive(): string {
    return 'LIVE'
  }
}
