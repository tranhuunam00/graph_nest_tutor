import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService, AuthorsResolver]
})
export class AuthorsModule {}
