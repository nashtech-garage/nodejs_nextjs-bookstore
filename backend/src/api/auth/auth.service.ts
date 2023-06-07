import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

import { AccountsService } from '../accounts/accounts.service'
import { ConfigService } from '@nestjs/config'
import { Account } from '../accounts/entities/account.entity'

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(email: string, password: string): Promise<any> {
    const account = await this.accountsService.findByEmail(email)

    // Validate Username exists and Password is correct
    if (!account || !bcrypt.compareSync(password, account.password)) {
      throw new UnauthorizedException({ message: 'Username or Password is not correct!' })
    }

    return {
      accessToken: await this.jwtService.signAsync({ email: account.email }),
      expireAt: Date.now() + this.configService.get('SERVER.JWT.EXPIRES_IN') * 1000,
    }
  }

  register(
    email: string,
    password: string,
    fullName: string,
    phone: string,
    address: string,
  ): Promise<Account> {
    return this.accountsService.save(email, password, fullName, phone, address)
  }
}
