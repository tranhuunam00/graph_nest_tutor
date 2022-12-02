import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/user.module';
import { TeamModule } from './modules/teams/team.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Team } from './modules/teams/team.model';
import { User } from './modules/users/user.model';
import { join } from 'path';
import { AuthorsModule } from './modules/authors/authors.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'example',
      entities: [Team, User],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      typePaths: ['./**/*.graphql'],
      include: [UserModule, TeamModule],
    }),

    UserModule,
    TeamModule,
    AuthorsModule,
    PostsModule,
  ],
})
export class AppModule {}
