import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'

import { Role } from 'src/common/constants'
import { Account } from './entities/account.entity'

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  findByUsername(username: string): Promise<Account> {
    return this.accountRepository.findOne({ where: { username } })
  }

  async save(username: string, password: string, fullName: string, phone: string, address: string, role?: Role): Promise<Account> {
    return this.accountRepository.save(
      new Account({
        username,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
        fullName,
        phone,
        address,
        role,
      }),
    )
  }
}
