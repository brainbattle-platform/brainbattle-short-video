import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('short-video/analytics')
export class AnalyticsController {
  constructor(private readonly service: AnalyticsService) {}

  @Get('health')
  health() {
    return this.service.health();
  }
}
