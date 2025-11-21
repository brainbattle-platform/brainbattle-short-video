import { Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ReactionsService } from './reactions.service';

@Controller('short-video')
export class ReactionsController {
  constructor(private readonly service: ReactionsService) {}

  @Post('videos/:id/like')
  likeVideo(@Param('id', ParseIntPipe) id: number) {
    return this.service.likeVideo(id);
  }
}
