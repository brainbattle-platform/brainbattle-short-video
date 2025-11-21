import { Module } from '@nestjs/common';
import { VideoMetadataModule } from './video/video-metadata/video-metadata.module';
import { UploadModule } from './video/upload/upload.module';
import { StorageModule } from './video/storage/storage.module';
import { FeedModule } from './video/feed/feed.module';
import { ReactionsModule } from './video/reactions/reactions.module';
import { CommentsModule } from './video/comments/comments.module';
import { FavoritesModule } from './video/favorites/favorites.module';
import { HashtagModule } from './video/hashtag/hashtag.module';
import { ReportingModule } from './video/reporting/reporting.module';
import { SearchModule } from './video/search/search.module';
import { AnalyticsModule } from './video/analytics/analytics.module';

@Module({
  imports: [
    VideoMetadataModule,
    UploadModule,
    StorageModule,
    FeedModule,
    ReactionsModule,
    CommentsModule,
    FavoritesModule,
    HashtagModule,
    ReportingModule,
    SearchModule,
    AnalyticsModule,
  ],
})
export class AppModule {}
