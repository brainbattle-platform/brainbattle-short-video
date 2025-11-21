import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  health() {
    return {
      module: 'upload',
      status: 'ok',
      note: 'Upload & media processing (stub).',
    };
  }
}
