import Image from "next/image";

const navLinks = [
  { label: "at a glance", href: "#at-a-glance" },
  { label: "platforms", href: "#platforms" },
  { label: "presence", href: "#presence" },
  { label: "team", href: "#team" },
  { label: "in the news", href: "#news" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-white px-[34px] py-[26px]">
      <a href="#" className="shrink-0">
        <Image
          src="/images/logo.png"
          alt="Ardent"
          width={227}
          height={35}
          priority
        />
      </a>

      <nav className="flex items-center gap-2">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-md px-[17px] py-3 font-[family-name:var(--font-archivo)] text-[15.75px] font-medium uppercase leading-[21px] text-ardent-blue transition-colors hover:bg-ardent-light"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className="rounded-md border border-ardent-blue px-[17px] py-3 font-[family-name:var(--font-archivo)] text-[15.75px] font-medium uppercase leading-[21px] text-ardent-blue transition-colors hover:bg-ardent-light"
        >
          Investor Login
        </a>
        <a
          href="#contact"
          className="rounded-md bg-ardent-blue px-[17px] py-3 font-[family-name:var(--font-archivo)] text-[15.75px] font-medium uppercase leading-[21px] text-white transition-opacity hover:opacity-90"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}
