import Image from "next/image";
import { LINKEDIN_COMPANY_URL, type NewsPost } from "@/data/news";
import { getNewsPosts } from "@/lib/linkedin";

function formatDate(iso?: string): string | null {
  if (!iso) return null;
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return null;
  }
}

function isRemoteImage(src?: string): boolean {
  return Boolean(src?.startsWith("http://") || src?.startsWith("https://"));
}

function PostCard({ post }: { post: NewsPost }) {
  const dateLabel = formatDate(post.publishedAt);
  const hasImage = Boolean(post.image);

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-[20px] bg-white transition-shadow hover:shadow-lg hover:shadow-ardent-blue/8">
      {hasImage ? (
        <div className="relative h-88 overflow-hidden rounded-t-[20px] bg-ardent-light max-lg:h-56">
          {isRemoteImage(post.image) ? (
            // Remote LinkedIn media — unoptimized to avoid domain allowlist friction
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.image}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={post.image!}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 360px"
              className="object-cover"
            />
          )}
        </div>
      ) : (
        <div className="flex h-88 items-center justify-center rounded-t-[20px] bg-gradient-to-br from-ardent-blue to-ardent-blue-dark px-6 max-lg:h-56">
          <span className="text-small font-bold uppercase tracking-wide text-white/90">
            LinkedIn
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 rounded-b-[20px] bg-white p-6">
        <div className="flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-wide text-ardent-blue/60">
          <span>LinkedIn</span>
          {dateLabel ? (
            <>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>{dateLabel}</time>
            </>
          ) : null}
        </div>

        <h3 className="text-heading-3 font-bold text-ardent-blue">{post.title}</h3>
        <p className="line-clamp-4 flex-1 text-[0.9375rem] leading-[1.6] text-charcoal/80">
          {post.excerpt}
        </p>
        <a
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block text-[0.9375rem] font-bold text-ardent-blue transition-colors hover:text-ardent-blue-dark hover:underline"
        >
          View on LinkedIn
        </a>
      </div>
    </article>
  );
}

export default async function News() {
  const { posts, fromLinkedIn } = await getNewsPosts();

  return (
    <section id="news" className="w-full">
      <div className="container-site flex flex-col items-center gap-15 rounded-[20px] bg-ardent-light px-20 py-30 max-lg:px-6 max-lg:py-20">
        <div className="flex w-full max-w-207.5 flex-col items-center gap-4 text-center">
          <h2 className="text-heading-1 font-bold text-ardent-blue">
            News & Announcements
          </h2>
          <p className="text-[0.9375rem] text-charcoal/70">
            {fromLinkedIn ? "Latest posts from " : "Updates from "}
            <a
              href={LINKEDIN_COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-ardent-blue hover:underline"
            >
              The Ardent Companies on LinkedIn
            </a>
          </p>
        </div>

        <div className="grid w-full grid-cols-3 gap-7.5 max-lg:grid-cols-1">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <a
          href={LINKEDIN_COMPANY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-small rounded-md border border-ardent-blue px-5 py-3 font-medium uppercase text-ardent-blue transition-colors hover:bg-white"
        >
          Follow on LinkedIn
        </a>
      </div>
    </section>
  );
}
