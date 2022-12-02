import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { relative } from 'path';
import { Repository } from 'typeorm';
import { AuthorsService } from '../authors/authors.service';
import { Post } from './models/posts.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @Inject(forwardRef(() => AuthorsService))
    private readonly authorService: AuthorsService,
  ) {}
  findAll(data: { authorId: number }) {
    return this.postRepository.find({ relations: ['authors'] });
  }
}
