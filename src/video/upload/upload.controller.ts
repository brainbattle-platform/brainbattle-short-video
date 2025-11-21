import { Controller, Get } from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller('short-video/upload')
export class UploadController {
  constructor(private readonly service: UploadService) {}

  @Get('health')
  health() {
    return this.service.health();
  }
}
