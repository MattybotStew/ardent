import {
  fallbackNewsPosts,
  LINKEDIN_COMPANY_URL,
  type NewsPost,
} from "@/data/news";

const LINKEDIN_VERSION = process.env.LINKEDIN_API_VERSION ?? "202506";
const POSTS_COUNT = 3;

type LinkedInPost = {
  id?: string;
  commentary?: string;
  content?: {
    media?: { id?: string };
    article?: { title?: string; description?: string; source?: string; thumbnail?: string };
  };
  publishedAt?: number;
  createdAt?: number;
};

type LinkedInPostsResponse = {
  elements?: LinkedInPost[];
};

function stripUrnId(urn: string | undefined): string {
  if (!urn) return `post-${Date.now()}`;
  const parts = urn.split(":");
  return parts[parts.length - 1] || urn;
}

function excerptFromCommentary(text: string, max = 220): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max).trimEnd()}…`;
}

function titleFromCommentary(text: string): string {
  const firstLine = text.split(/\n|\.(?=\s)/)[0]?.trim() ?? text;
  const cleaned = firstLine.replace(/\s+/g, " ").trim();
  if (cleaned.length <= 72) return cleaned || "LinkedIn update";
  return `${cleaned.slice(0, 69).trimEnd()}…`;
}

function postHref(postId: string): string {
  // Activity URNs often map to feed updates; company page is a safe destination
  // when we only have a share/post id without a public activity URL.
  if (postId && !postId.includes("fallback")) {
    return `${LINKEDIN_COMPANY_URL}/posts/`;
  }
  return LINKEDIN_COMPANY_URL;
}

function mapLinkedInPost(post: LinkedInPost, index: number): NewsPost {
  const commentary = post.commentary?.trim() || "";
  const articleTitle = post.content?.article?.title;
  const articleDesc = post.content?.article?.description;
  const text = commentary || articleDesc || "Update from The Ardent Companies on LinkedIn.";
  const id = stripUrnId(post.id) || `linkedin-${index}`;
  const ts = post.publishedAt ?? post.createdAt;

  return {
    id,
    title: articleTitle?.trim() || titleFromCommentary(text),
    excerpt: excerptFromCommentary(text),
    href: post.content?.article?.source || postHref(id),
    image: post.content?.article?.thumbnail || undefined,
    publishedAt: ts ? new Date(ts).toISOString() : undefined,
    source: "linkedin",
  };
}

/**
 * Fetch recent organization posts via LinkedIn Posts API.
 * Requires LINKEDIN_ACCESS_TOKEN + LINKEDIN_ORGANIZATION_ID (numeric page id).
 * Docs: https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api
 */
export async function fetchLinkedInCompanyPosts(): Promise<NewsPost[] | null> {
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  const orgId = process.env.LINKEDIN_ORGANIZATION_ID;

  if (!token || !orgId) {
    return null;
  }

  const author = encodeURIComponent(`urn:li:organization:${orgId}`);
  const url = `https://api.linkedin.com/rest/posts?q=author&author=${author}&count=${POSTS_COUNT}&sortBy=LAST_MODIFIED`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Linkedin-Version": LINKEDIN_VERSION,
        "X-Restli-Protocol-Version": "2.0.0",
      },
      // Revalidate every hour when used from a Server Component
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(
        `[linkedin] Posts API ${res.status}: ${await res.text().catch(() => "")}`,
      );
      return null;
    }

    const data = (await res.json()) as LinkedInPostsResponse;
    const elements = data.elements ?? [];
    if (elements.length === 0) return null;

    return elements.slice(0, POSTS_COUNT).map(mapLinkedInPost);
  } catch (err) {
    console.error("[linkedin] Failed to fetch company posts:", err);
    return null;
  }
}

/**
 * Posts for the News section: live LinkedIn when configured, else curated fallbacks.
 */
export async function getNewsPosts(): Promise<{
  posts: NewsPost[];
  fromLinkedIn: boolean;
}> {
  const live = await fetchLinkedInCompanyPosts();
  if (live && live.length > 0) {
    return { posts: live, fromLinkedIn: true };
  }
  return { posts: fallbackNewsPosts, fromLinkedIn: false };
}
