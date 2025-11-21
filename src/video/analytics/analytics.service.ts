import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  health() {
    return {
      module: 'analytics',
      status: 'ok',
      note: 'Analytics for video performance.',
    };
  }
}
