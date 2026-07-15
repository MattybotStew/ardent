"use client";

import Link from "next/link";
import { useRef } from "react";
import SvgImg from "@/components/SvgImg";

const navLinks = [
  { label: "at a glance", href: "#at-a-glance" },
  { label: "platforms", href: "#platforms" },
  { label: "presence", href: "#presence" },
  { label: "team", href: "#team" },
  { label: "in the news", href: "#news" },
];

const linkClassName =
  "whitespace-nowrap rounded-md px-2.5 py-2 text-[0.8125rem] font-medium uppercase leading-none text-ardent-blue transition-colors hover:bg-ardent-light";

const ctaClassName =
  "whitespace-nowrap rounded-md bg-ardent-blue px-3.5 py-2.5 text-[0.8125rem] font-medium uppercase leading-none text-white transition-opacity hover:opacity-90";

const outlineClassName =
  "whitespace-nowrap rounded-md border border-ardent-blue px-3.5 py-2.5 text-[0.8125rem] font-medium uppercase leading-none text-ardent-blue transition-colors hover:bg-ardent-light";

export default function Header() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full max-w-[100vw] overflow-x-clip border-b border-ardent-blue/5 bg-white py-4 max-lg:py-3">
      <div className="container-site flex min-w-0 items-center justify-between gap-4">
        <Link href="/" className="shrink-0" onClick={closeMobileMenu}>
          <SvgImg
            src="/ardent/images/logo.svg"
            alt="Ardent"
            width={180}
            height={28}
            className="h-7 w-auto max-lg:h-6"
          />
        </Link>

        <nav
          className="flex shrink-0 items-center gap-0.5 max-lg:hidden"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClassName}>
              {link.label}
            </a>
          ))}
          <a href="#" className={`${outlineClassName} ml-1`}>
            Investor Login
          </a>
          <a href="#contact" className={`${ctaClassName} ml-1`}>
            Contact Us
          </a>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 max-lg:flex">
          <a
            href="#contact"
            className={ctaClassName}
            onClick={closeMobileMenu}
          >
            Contact Us
          </a>
          <details ref={menuRef} className="relative">
            <summary
              className={`${outlineClassName} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
            >
              Menu
            </summary>
            <nav
              className="absolute right-0 top-full z-50 mt-2 flex w-[min(220px,calc(100vw-2rem))] flex-col gap-1 rounded-[16px] border border-ardent-blue/10 bg-white p-2 shadow-lg"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${linkClassName} block w-full px-3 py-2.5`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className={`${outlineClassName} block w-full text-center`}
              >
                Investor Login
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
