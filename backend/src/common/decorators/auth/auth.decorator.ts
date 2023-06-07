import { SetMetadata, applyDecorators, UseGuards } from '@nestjs/common'
import { ApiBearerAuth } from '@nestjs/swagger'

import { Role } from 'src/common/constants'
import { AuthGuard, RoleGuard } from 'src/common/guards'

export const Auth = (roles?: Role[]) =>
  applyDecorators(SetMetadata('roles', roles), ApiBearerAuth(), UseGuards(AuthGuard), UseGuards(RoleGuard))
