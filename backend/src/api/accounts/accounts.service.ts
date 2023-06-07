import { Injectable } from '@nestjs/common'
import { Like, Repository } from 'typeorm'
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

  find(search?: string, limit?: number, page?: number) {
    const offset = limit * page - limit || 0
    return this.accountRepository.find({ take: limit, skip: offset, where: { email: Like(`%${search}%`) } })
  }

  findByEmail(email: string): Promise<Account> {
    return this.accountRepository.findOne({ where: { email } })
  }

  async save(
    email: string,
    password: string,
    fullName: string,
    phone: string,
    address: string,
    role?: Role,
    active?: boolean,
  ): Promise<Account> {
    return this.accountRepository.save(
      new Account({
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
        fullName,
        phone,
        address,
        role,
        active,
      }),
    )
  }
}
