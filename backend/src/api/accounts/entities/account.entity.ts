import { Exclude } from 'class-transformer'
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'

import { Book } from 'src/api/books/entities/book.entity'
import { Role } from 'src/common/constants'

@Entity({ name: 'accounts' })
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  @Exclude()
  password: string

  @Column()
  fullName: string

  @Column()
  phone: string

  @Column()
  address: string

  @Column({ type: 'enum', enum: Role, default: Role.Customer })
  role: Role

  @Column({ default: true })
  active: boolean

  @OneToMany(() => Book, (book) => book.createdBy)
  books: Book[]

  constructor(partial: Partial<Account>) {
    super()
    Object.assign(this, partial)
  }
}
