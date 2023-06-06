import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  RelationId,
  CreateDateColumn,
} from 'typeorm'

import { Category } from 'src/api/categories/entities/category.entity'
import { Account } from 'src/api/accounts/entities/account.entity'

@Entity({ name: 'books' })
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  image: string

  @Column()
  author: string

  @Column()
  description: string

  @Column()
  categoryId: number

  @Column()
  createdBy: string

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => Category, (category) => category.books)
  @JoinColumn({ name: 'categoryId' })
  category: Category

  @ManyToOne(() => Account, (account) => account.books)
  @JoinColumn({ name: 'createdBy', referencedColumnName: 'email' })
  account: Account

  constructor(partial: Partial<Book>) {
    super()
    Object.assign(this, partial)
  }
}
