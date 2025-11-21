import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageService {
  health() {
    return {
      module: 'storage',
      status: 'ok',
      note: 'Storage & CDN integration (stub).',
    };
  }
}
