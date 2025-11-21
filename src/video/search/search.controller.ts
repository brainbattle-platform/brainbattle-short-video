import { Controller, Get } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('short-video/search')
export class SearchController {
  constructor(private readonly service: SearchService) {}

  @Get('health')
  health() {
    return this.service.health();
  }
}
