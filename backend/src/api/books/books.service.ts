import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Like, Repository } from 'typeorm'

import { Book } from './entities/book.entity'

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  find(search?: string, limit?: number, page?: number) {
    const offset = limit * page - limit || 0
    return this.bookRepository.find({ take: limit, skip: offset, where: { name: Like(`%${search}%`) } })
  }

  findOne(id: number) {
    return this.bookRepository.findOne({ where: { id } })
  }

  save(name: string, image: string, author: string, description: string, categoryId: number, createdBy: string) {
    return this.bookRepository.save({ name, image, author, description, categoryId, createdBy })
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
