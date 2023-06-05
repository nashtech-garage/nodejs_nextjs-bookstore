import { Book } from 'src/api/books/entities/book.entity'
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'

@Entity({ name: 'categories' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  @OneToMany(() => Book, (book) => book.category)
  books: Book[]

  constructor(partial: Partial<Category>) {
    super()
    Object.assign(this, partial)
  }
}
