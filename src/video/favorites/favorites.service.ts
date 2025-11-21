import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritesService {
  health() {
    return {
      module: 'favorites',
      status: 'ok',
      note: 'Favorites & collections of videos.',
    };
  }
}
