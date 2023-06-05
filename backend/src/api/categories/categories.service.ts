import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Category } from './entities/category.entity'

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  find() {
    return this.categoryRepository.find()
  }

  save(name: string) {
    return this.categoryRepository.save({ name })
  }
}
