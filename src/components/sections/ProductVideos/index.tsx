import { Container } from "@/components/ui/Container";
import { getPbFileUrl, ProductVideoRecord } from "@/lib/pocketbase";

interface ProductVideosProps {
  videos: ProductVideoRecord[];
}

function ProductVideoCard({ video }: { video: ProductVideoRecord }) {
  const src = getPbFileUrl(video.collectionId, video.id, video.video_file);
  if (!src) return null;

  const poster = video.thumbnail
    ? getPbFileUrl(video.collectionId, video.id, video.thumbnail) ?? undefined
    : undefined;

  return (
    <figure className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-xl">
      <video
        controls
        playsInline
        // With a poster nothing loads until play; without one, fetch just enough to paint a frame.
        preload={poster ? "none" : "metadata"}
        poster={poster}
        className="aspect-video w-full bg-black"
      >
        {/* #t=0.1 makes browsers paint a real frame as the thumbnail instead of a black box */}
        <source src={poster ? src : `${src}#t=0.1`} />
        Your browser does not support the video tag.
      </video>
      <figcaption className="p-6" style={{ fontFamily: "Gilroy, sans-serif" }}>
        <h3 className="text-xl font-bold text-gray-900">{video.title}</h3>
        {video.description && (
          <p className="mt-2 text-gray-600 leading-relaxed">{video.description}</p>
        )}
      </figcaption>
    </figure>
  );
}

export function ProductVideos({ videos }: ProductVideosProps) {
  if (videos.length === 0) return null;

  const gridClass =
    videos.length === 1
      ? "mx-auto max-w-4xl"
      : videos.length === 2
        ? "grid grid-cols-1 gap-8 md:grid-cols-2"
        : "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2
              className="mb-4 text-4xl text-gray-900 md:text-5xl"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              See Our Products <span className="text-[#00a54f]">in Action</span>
            </h2>
            <p
              className="mx-auto max-w-2xl text-lg text-gray-600"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              From the farm to your table — watch how our fruit becomes everyday goodness.
            </p>
          </div>
          <div className={gridClass}>
            {videos.map((video) => (
              <ProductVideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
