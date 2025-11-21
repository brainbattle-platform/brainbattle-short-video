import { Controller, Get } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('short-video/favorites')
export class FavoritesController {
  constructor(private readonly service: FavoritesService) {}

  @Get('health')
  health() {
    return this.service.health();
  }
}
