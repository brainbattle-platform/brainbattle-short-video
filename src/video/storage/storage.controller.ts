import { Controller, Get } from '@nestjs/common';
import { StorageService } from './storage.service';

@Controller('short-video/storage')
export class StorageController {
  constructor(private readonly service: StorageService) {}

  @Get('health')
  health() {
    return this.service.health();
  }
}
