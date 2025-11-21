import { Controller, Get } from '@nestjs/common';
import { ReportingService } from './reporting.service';

@Controller('short-video/reporting')
export class ReportingController {
  constructor(private readonly service: ReportingService) {}

  @Get('health')
  health() {
    return this.service.health();
  }
}
