import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('accounts')
@Controller('/api/accounts')
export class AccountsController {}
