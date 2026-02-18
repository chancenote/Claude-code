'use client';

import type { YouTubeVideo } from '@/types/curriculum';

function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

interface VideoPlayerProps {
  video: YouTubeVideo;
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  const videoId = getYouTubeId(video.url);

  if (!videoId) {
    return (
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-white/[0.04] bg-card p-6 transition-all hover:border-cc-red/30"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cc-red/10 text-lg">
            ▶
          </div>
          <div>
            <h4 className="font-semibold">{video.title}</h4>
            <p className="text-xs text-text-dim">
              {video.channel} · {video.duration}
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm text-text-muted">{video.description}</p>
      </a>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.04] bg-card">
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="p-4">
        <h4 className="font-semibold">{video.title}</h4>
        <p className="mt-1 text-xs text-text-dim">
          {video.channel} · {video.duration}
        </p>
        <p className="mt-2 text-sm text-text-muted">{video.description}</p>
      </div>
    </div>
  );
}
