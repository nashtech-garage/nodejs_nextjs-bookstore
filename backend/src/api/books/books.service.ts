import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Like, Repository } from 'typeorm'
import { InjectAwsService } from 'nest-aws-sdk'
import { S3 } from 'aws-sdk'
import { ManagedUpload } from 'aws-sdk/clients/s3'

import { Book } from './entities/book.entity'

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectAwsService(S3) private readonly s3: S3,
    private configService: ConfigService,
  ) {}

  find(search?: string, limit?: number, page?: number) {
    const offset = limit * page - limit || 0
    return this.bookRepository.find({ take: limit, skip: offset, where: { name: Like(`%${search}%`) } })
  }

  findOne(id: number) {
    return this.bookRepository.findOne({ where: { id } })
  }

  async save(
    name: string,
    image: Express.Multer.File,
    author: string,
    description: string,
    price: number,
    salePrice: number,
    categoryId: number,
    createdBy: string,
  ) {
    const imageUploaded: ManagedUpload.SendData = await new Promise((resolve, reject) => {
      this.s3.upload(
        {
          Bucket: this.configService.get('AWS.SERVICES.S3.BUCKET_NAME'),
          Body: image.buffer,
          Key: `images/${name}-${Date.now()}`,
        },
        (error: Error, data: ManagedUpload.SendData) => {
          if (error) {
            reject(error)
          }
          if (data) {
            resolve(data)
          }
        },
      )
    })

    return this.bookRepository.save({
      name,
      imageName: imageUploaded.Key,
      author,
      description,
      price,
      salePrice,
      categoryId,
      createdBy,
    })
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
