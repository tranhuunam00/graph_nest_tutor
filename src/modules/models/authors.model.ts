import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../posts/models/posts.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('authors')
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field({ nullable: true })
  firstName?: string;

  @Column()
  @Field({ nullable: true })
  lastName?: string;

  @OneToMany(() => Post, (post) => post.id)
  @Field((type) => [Post])
  posts: Post[];
}
