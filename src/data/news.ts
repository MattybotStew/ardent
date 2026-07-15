/**
 * News / LinkedIn post shape used by the News section.
 * When LINKEDIN_* env vars are set, live posts replace these fallbacks.
 */
export type NewsPost = {
  id: string;
  title: string;
  excerpt: string;
  /** Absolute URL to the LinkedIn post or company feed */
  href: string;
  /** Optional image (local path or remote URL) */
  image?: string;
  /** ISO date string for display */
  publishedAt?: string;
  source: "linkedin" | "fallback";
};

export const LINKEDIN_COMPANY_URL =
  "https://www.linkedin.com/company/the-ardent-companies";

/**
 * Curated fallbacks until LinkedIn API credentials are configured.
 * Prefer real post URLs from the company page when available.
 */
export const fallbackNewsPosts: NewsPost[] = [
  {
    id: "fallback-1",
    title: "The Ardent Companies on LinkedIn",
    excerpt:
      "Follow Ardent for firm updates, platform activity, and market perspectives across debt and equity real estate investments.",
    href: LINKEDIN_COMPANY_URL,
    image: "/images/news-1.jpg",
    source: "fallback",
  },
  {
    id: "fallback-2",
    title: "Latest company updates",
    excerpt:
      "Connect with The Ardent Companies on LinkedIn for news, announcements, and insights from our investment platforms.",
    href: LINKEDIN_COMPANY_URL,
    image: "/images/news-2.jpg",
    source: "fallback",
  },
  {
    id: "fallback-3",
    title: "Join the conversation",
    excerpt:
      "See recent posts from Ardent’s leadership and teams covering capital markets, development, and portfolio activity.",
    href: LINKEDIN_COMPANY_URL,
    image: "/images/news-3.jpg",
    source: "fallback",
  },
];
