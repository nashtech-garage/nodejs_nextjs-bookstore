import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Book } from './entities/book.entity'

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  find(limit?: number, page?: number) {
    const offset = limit * page - limit || 0
    return this.bookRepository.find({ take: limit, skip: offset })
  }

  save(name: string, image: string, author: string, description: string, category: number) {
    return this.bookRepository.save({ name, image, author, description, category: { id: category } })
  }

  findByCategoryId(id: number, limit?: number, page?: number) {
    const offset = limit * page - limit || 0
    return this.bookRepository.find({ where: { categoryId: id }, take: limit, skip: offset })
  }

  findNewBooks(limit?: number, page?: number) {
    const offset = limit * page - limit || 0
    return this.bookRepository.find({ order: { createdAt: 'DESC' }, take: limit, skip: offset })
  }
}
