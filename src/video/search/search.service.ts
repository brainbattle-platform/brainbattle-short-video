import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  health() {
    return {
      module: 'search',
      status: 'ok',
      note: 'Search & discovery APIs.',
    };
  }
}
