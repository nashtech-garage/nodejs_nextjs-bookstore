import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AccountsService } from 'src/api/accounts/accounts.service'

import { Role } from 'src/common/constants'

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector, private accountsService: AccountsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [context.getHandler(), context.getClass()])
    if (!requiredRoles) {
      return true
    }

    const request = context.switchToHttp().getRequest<Request>()
    const { email } = request['user']
    const account = await this.accountsService.findByEmail(email)

    return requiredRoles.includes(account.role)
  }
}
