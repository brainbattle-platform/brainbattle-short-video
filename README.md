# BrainBattle Short-Video Service (NestJS skeleton)

TikTok-style short-video microservice with multiple modules under `src/video`:

- video-metadata
- upload
- storage
- feed
- reactions
- comments
- favorites
- hashtag
- reporting
- search
- analytics

## Quick start

```bash
npm install
npm run start:dev
```

Service runs at: `http://localhost:3002/api`

Example endpoints:

- `GET /api/short-video/feed`
- `POST /api/short-video/videos/1/like`
- `GET /api/short-video/feed/health` (and similar health endpoints for other modules)
