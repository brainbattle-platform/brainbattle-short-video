import { Module } from '@nestjs/common';
import { VideoMetadataController } from './video-metadata.controller';
import { VideoMetadataService } from './video-metadata.service';

@Module({
  controllers: [VideoMetadataController],
  providers: [VideoMetadataService],
  exports: [VideoMetadataService],
})
export class VideoMetadataModule {}
