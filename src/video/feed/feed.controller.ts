import { Controller, Get, Query } from '@nestjs/common';
import { FeedService } from './feed.service';

@Controller('short-video')
export class FeedController {
  constructor(private readonly service: FeedService) {}

  @Get('feed')
  getFeed(@Query('page') page = '1', @Query('pageSize') pageSize = '10') {
    return this.service.getFeed(parseInt(page, 10), parseInt(pageSize, 10));
  }
}
