import { Controller, Get } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('short-video/comments')
export class CommentsController {
  constructor(private readonly service: CommentsService) {}

  @Get('health')
  health() {
    return this.service.health();
  }
}
