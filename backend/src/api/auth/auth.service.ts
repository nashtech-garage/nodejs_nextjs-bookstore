import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

import { AccountsService } from '../accounts/accounts.service'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(username: string, password: string): Promise<any> {
    const account = await this.accountsService.findByUsername(username)

    // Validate Username exists and Password is correct
    if (!account || !bcrypt.compareSync(password, account.password)) {
      throw new UnauthorizedException({ message: 'Username or Password is not correct!' })
    }

    return {
      accessToken: await this.jwtService.signAsync({ username: account.username }),
      expireAt: Date.now() + this.configService.get('SERVER.JWT.EXPIRES_IN') * 1000,
    }
  }

  async register(
    username: string,
    password: string,
    fullName: string,
    phone: string,
    address: string,
  ): Promise<boolean> {
    await this.accountsService.save(username, password, fullName, phone, address)
    return true
  }
}
