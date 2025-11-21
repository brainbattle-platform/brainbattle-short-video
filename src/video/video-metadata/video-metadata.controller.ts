import { Controller, Get } from '@nestjs/common';
import { VideoMetadataService } from './video-metadata.service';

@Controller('short-video/videos')
export class VideoMetadataController {
  constructor(private readonly service: VideoMetadataService) {}

  @Get('health')
  health() {
    return this.service.health();
  }
}
