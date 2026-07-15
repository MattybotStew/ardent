import Link from "next/link";
import SvgImg from "@/components/SvgImg";

const footerNav = [
  { label: "At a Glance", href: "#at-a-glance" },
  { label: "Platforms", href: "#platforms" },
  { label: "Presence", href: "#presence" },
  { label: "Team", href: "#team" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/the-ardent-companies",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-ardent-blue-dark">
      <div className="container-site flex flex-col gap-10 py-12 max-lg:py-10">
        {/* Top: brand + in-page nav */}
        <div className="flex flex-wrap items-center justify-between gap-8 max-lg:flex-col max-lg:items-start">
          <Link href="/" className="shrink-0 opacity-95 transition-opacity hover:opacity-100">
            <SvgImg
              src="/images/logo.svg"
              alt="The Ardent Companies"
              width={200}
              height={31}
              className="h-[31px] w-auto brightness-0 invert"
            />
          </Link>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 max-lg:gap-x-4"
          >
            {footerNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-small font-medium uppercase tracking-wide text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px w-full bg-white/15" />

        {/* Bottom: copyright + legal */}
        <div className="flex flex-wrap items-center justify-between gap-4 max-lg:flex-col max-lg:items-start max-lg:gap-3">
          <p className="text-caption text-white/60">
            © 2013–{new Date().getFullYear()} The Ardent Companies. All rights
            reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-1 gap-y-2 text-caption text-white/60">
            {legalLinks.map((link, i) => (
              <li key={link.label} className="flex items-center gap-x-1">
                {i > 0 ? (
                  <span className="px-2 text-white/30" aria-hidden="true">
                    ·
                  </span>
                ) : null}
                <a
                  href={link.href}
                  className="transition-colors hover:text-white"
                  {...(link.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
