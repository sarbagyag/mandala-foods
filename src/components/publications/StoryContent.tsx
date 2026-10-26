interface StoryContentProps {
  html: string;
  videoUrls: string[];
}

// Editors drop `[video:1]` on its own line in the rich-text field; it maps to the 1st file in `videos`.
// The optional <p> wrapper is swallowed so we don't leave an empty paragraph behind.
const VIDEO_MARKER = /(?:<p[^>]*>\s*)?\[video:(\d+)\](?:\s*<\/p>)?/gi;

function StoryVideo({ src }: { src: string }) {
  return (
    <video
      controls
      preload="metadata"
      className="my-10 aspect-video w-full rounded-2xl bg-black shadow-lg"
    >
      {/* #t=0.1 makes browsers paint a real frame as the thumbnail instead of a black box */}
      <source src={`${src}#t=0.1`} />
      Your browser does not support the video tag.
    </video>
  );
}

export function StoryContent({ html, videoUrls }: StoryContentProps) {
  // split() with a capture group yields [html, index, html, index, ...]
  const parts = html.split(VIDEO_MARKER);

  const body = parts.map((part, i) => {
    if (i % 2 === 0) {
      return part.trim() ? (
        <div
          key={i}
          className="rich-text-content text-gray-700 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: part }}
        />
      ) : null;
    }
    const idx = Number(part) - 1;
    const src = videoUrls[idx];
    if (!src) return null;
    return <StoryVideo key={i} src={src} />;
  });

  return <>{body}</>;
}
