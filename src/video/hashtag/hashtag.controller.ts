import { Controller, Get } from '@nestjs/common';
import { HashtagService } from './hashtag.service';

@Controller('short-video/hashtags')
export class HashtagController {
  constructor(private readonly service: HashtagService) {}

  @Get('health')
  health() {
    return this.service.health();
  }
}
