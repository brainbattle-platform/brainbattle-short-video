import { Injectable } from '@nestjs/common';

export interface VideoFeedItem {
  id: number;
  url: string;
  caption: string;
  author: string;
  likes: number;
  views: number;
  language: string;
  level: string;
}

@Injectable()
export class FeedService {
  // Demo in-memory videos
  private videos: VideoFeedItem[] = [
    {
      id: 1,
      url: 'https://example.com/video1.mp4',
      caption: 'Demo video 1',
      author: 'User A',
      likes: 10,
      views: 100,
      language: 'en',
      level: 'A1',
    },
    {
      id: 2,
      url: 'https://example.com/video2.mp4',
      caption: 'Study with me',
      author: 'User B',
      likes: 5,
      views: 50,
      language: 'en',
      level: 'A2',
    },
  ];

  getFeed(page: number, pageSize: number): VideoFeedItem[] {
    const start = (page - 1) * pageSize;
    return this.videos.slice(start, start + pageSize);
  }
}
