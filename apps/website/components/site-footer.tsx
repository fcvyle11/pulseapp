// components/site-footer.tsx

const footerLinks = [
    { label: "Product", href: "#product" },
    { label: "Moments", href: "#moments" },
    { label: "Join", href: "#join" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ];
  
  const socialLinks = [
    { label: "X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
  ];
  
  export function SiteFooter() {
    return (
      <footer className="border-t border-black/10 bg-white px-5 py-20 text-black sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-14 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="text-[26px] font-bold tracking-[-0.06em]">Pulse</p>
  
            <p className="mt-4 text-[16px] font-medium leading-7 text-black/55">
              Live nearby.
              <br />
              Tap in while it’s happening.
            </p>
          </div>
  
          <div className="grid gap-10 sm:grid-cols-2 md:min-w-[360px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/35">
                Site
              </p>
  
              <nav className="mt-5 flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-semibold text-black/60 transition-colors hover:text-black"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
  
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/35">
                Social
              </p>
  
              <nav className="mt-5 flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-semibold text-black/60 transition-colors hover:text-black"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
  
        <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-3 border-t border-black/10 pt-7 text-sm font-medium text-black/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Pulse. All rights reserved.</p>
          <p>No feed. No replay. Just what’s live.</p>
        </div>
      </footer>
    );
  }