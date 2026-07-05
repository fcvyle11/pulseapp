"use client";

import { useState } from "react";
import { FileTree } from "./file-tree";

export function RepositoryCard() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-2 border-[#111111] bg-white">
      <button
        onClick={() => setOpen((value) => !value)}
        className="grid w-full grid-cols-[1fr_auto] items-center gap-6 border-b-2 border-[#111111] px-5 py-4 text-left"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="border-2 border-[#111111] bg-[#111111] px-2 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
              Repo
            </span>

            <h1 className="text-xl font-black tracking-tight">
              pulse-os
            </h1>
          </div>

          <p className="mt-2 text-sm font-medium text-[#555555]">
            Local operating layer for Pulse agents, project control, sandbox builds, and repo visibility.
          </p>
        </div>

        <span className="text-2xl font-black">
          {open ? "−" : "+"}
        </span>
      </button>

      <div className="grid grid-cols-1 border-b-2 border-[#111111] md:grid-cols-4">
        <Info label="Repository" value="github.com/kylefoyle/pulse-os" />
        <Info label="Branch" value="main" />
        <Info label="Last Sync" value="3 minutes ago" />
        <Info label="Local Path" value="~/projects/pulse-os" />
      </div>

      {open && (
        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr]">
          <aside className="border-b-2 border-[#111111] bg-[#eeeeea] md:border-b-0 md:border-r-2">
            <div className="border-b-2 border-[#111111] px-4 py-3">
              <p className="text-xs font-black uppercase tracking-[0.18em]">
                Last Commit
              </p>

              <p className="mt-3 text-sm font-black">
                Add projects repository view
              </p>

              <p className="mt-1 text-xs font-semibold text-[#666666]">
                by Kyle · 12 minutes ago
              </p>
            </div>

            <div className="px-4 py-3">
              <a
                href="https://github.com/kylefoyle/pulse-os"
                target="_blank"
                rel="noreferrer"
                className="inline-block border-2 border-[#111111] bg-[#111111] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white"
              >
                Open GitHub
              </a>
            </div>
          </aside>

          <div className="bg-[#fbfbf8]">
            <div className="border-b-2 border-[#111111] px-4 py-3">
              <p className="text-xs font-black uppercase tracking-[0.18em]">
                Project File Tree
              </p>
            </div>

            <FileTree />
          </div>
        </div>
      )}
    </section>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b-2 border-[#111111] px-4 py-3 md:border-b-0 md:border-r-2 last:md:border-r-0">
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#777777]">
        {label}
      </p>

      <p className="mt-2 break-all text-sm font-black">
        {value}
      </p>
    </div>
  );
}