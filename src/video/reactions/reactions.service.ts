import { Injectable, NotFoundException } from '@nestjs/common';
import { FeedService } from '../feed/feed.service';

@Injectable()
export class ReactionsService {
  constructor(private readonly feedService: FeedService) {}

  likeVideo(id: number) {
    // For demo, mutate FeedService's in-memory list via a simple lookup
    // In real app, this would go through a VideoRepository/DB
    const feed: any = (this.feedService as any);
    const videos = feed.videos as any[] | undefined;

    if (!videos) {
      throw new NotFoundException('No videos collection available');
    }

    const video = videos.find((v) => v.id === id);
    if (!video) {
      throw new NotFoundException('Video not found');
    }

    video.likes += 1;
    return video;
  }
}
