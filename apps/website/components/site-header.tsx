// components/site-header.tsx

import Link from "next/link";

const navItems = [
  { label: "How it works", href: "#product" },
  { label: "Live moments", href: "#moments" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex h-16 w-[calc(100%-24px)] max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-5 text-white shadow-[0_12px_45px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-7">
        <Link
          href="/"
          aria-label="Pulse"
          className="text-[26px] font-black tracking-[-0.06em]"
        >
          Pulse
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-white/65 transition duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#join"
          className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-[14px] font-bold text-black transition hover:scale-[0.97]"
        >
          Join Early
        </a>
      </div>
    </header>
  );
}