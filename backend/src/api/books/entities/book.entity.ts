import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, RelationId, CreateDateColumn } from 'typeorm'

import { Category } from 'src/api/categories/entities/category.entity'

@Entity({ name: 'books' })
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  image: string

  @ManyToOne(() => Category, (category) => category.books)
  @JoinColumn({ name: 'categoryId' })
  category: Category

  @Column()
  author: string

  @Column()
  description: string

  @Column()
  categoryId: number

  @CreateDateColumn()
  createdAt: Date

  constructor(partial: Partial<Book>) {
    super()
    Object.assign(this, partial)
  }
}
