import { Body, Controller, Post, Request } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { AuthService } from './auth.service'
import { LoginDto } from './dto/logn.dto'
import { RegisterDto } from './dto/register.dto'
import { Auth } from 'src/common'
import { AccountsService } from '../accounts/accounts.service'

@ApiTags('auth')
@Controller('/api/auth')
export class AuthController {
  constructor(private authService: AuthService, private accountsService: AccountsService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    try {
      const { email, password } = loginDto

      return {
        message: 'Login Successfully',
        data: await this.authService.login(email, password),
      }
    } catch (error) {
      throw error
    }
  }

  @Post('/register')
  async registry(@Body() registerDto: RegisterDto): Promise<any> {
    try {
      const { email, password, fullName, phone, address } = registerDto

      await this.authService.register(email, password, fullName, phone, address)

      return {
        message: 'Register Successfully',
      }
    } catch (error) {
      throw error
    }
  }

  @Auth()
  @Post('/profile')
  async profile(@Request() req): Promise<any> {
    try {
      const { email } = req.user

      return {
        message: 'Get Info Successfully',
        data: await this.accountsService.findByEmail(email),
      }
    } catch (error) {
      throw error
    }
  }
}
