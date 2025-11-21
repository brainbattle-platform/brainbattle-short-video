import { Injectable } from '@nestjs/common';

@Injectable()
export class VideoMetadataService {
  health() {
    return {
      module: 'video-metadata',
      status: 'ok',
      note: 'Video metadata: id, url, caption, owner, language, level, topic.',
    };
  }
}
