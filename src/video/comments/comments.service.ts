import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
  health() {
    return {
      module: 'comments',
      status: 'ok',
      note: 'Comments & threads for videos.',
    };
  }
}
