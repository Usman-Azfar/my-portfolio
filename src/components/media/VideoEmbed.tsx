"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import type { MediaVideo } from "@/types";

function getEmbedUrl(video: MediaVideo) {
  if (video.provider === "youtube") {
    const idMatch = video.src.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
    const id = idMatch ? idMatch[1] : video.src;
    return `https://www.youtube-nocookie.com/embed/${id}`;
  }
  if (video.provider === "vimeo") {
    const idMatch = video.src.match(/vimeo\.com\/(\d+)/);
    const id = idMatch ? idMatch[1] : video.src;
    return `https://player.vimeo.com/video/${id}`;
  }
  return video.src;
}

export function VideoEmbed({ video }: { video?: MediaVideo }) {
  const [playing, setPlaying] = useState(false);

  if (!video) return null;

  if (video.provider !== "local") {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-surface-secondary">
        {playing ? (
          <div className="aspect-video">
            <iframe
              src={`${getEmbedUrl(video)}?autoplay=1`}
              title={video.caption ?? "Embedded video"}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative flex aspect-video w-full items-center justify-center bg-cover bg-center"
            style={video.poster ? { backgroundImage: `url(${video.poster})` } : undefined}
            aria-label="Play video"
          >
            <span className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-background">
              <Play size={22} fill="currentColor" />
            </span>
          </button>
        )}
        {video.caption && <p className="px-4 py-3 text-sm text-muted">{video.caption}</p>}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface-secondary">
      <video
        controls
        muted
        playsInline
        poster={video.poster}
        className="aspect-video w-full"
        preload="metadata"
      >
        <source src={video.src} />
        Your browser does not support embedded video.
      </video>
      {video.caption && <p className="px-4 py-3 text-sm text-muted">{video.caption}</p>}
    </div>
  );
}
