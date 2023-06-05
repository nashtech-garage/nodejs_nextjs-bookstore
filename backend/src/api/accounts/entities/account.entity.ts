import { Exclude } from 'class-transformer'
import { Role } from 'src/common/constants'
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity({ name: 'accounts' })
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ unique: true })
  username: string

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

  constructor(partial: Partial<Account>) {
    super()
    Object.assign(this, partial)
  }
}
