import Link from "next/link";
import { navItems } from "@/lib/nav";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">P</div>
        <div>
          <strong>Pulse OS</strong>
          <span>Private build system</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span>Workspace</span>
        <strong>Pulse</strong>
      </div>
    </aside>
  );
}