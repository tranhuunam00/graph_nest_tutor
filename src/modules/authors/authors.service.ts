import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../models/authors.model';
import { PostsService } from '../posts/posts.service';
@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    @Inject(forwardRef(() => PostsService))
    private readonly userService: PostsService,
  ) {}
  findOneById(number) {
    return this.authorRepository.findOne({});
  }
}
