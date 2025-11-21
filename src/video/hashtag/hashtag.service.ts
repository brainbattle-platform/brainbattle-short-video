import { Injectable } from '@nestjs/common';

@Injectable()
export class HashtagService {
  health() {
    return {
      module: 'hashtag',
      status: 'ok',
      note: 'Hashtags/topics/tagging for discovery.',
    };
  }
}
