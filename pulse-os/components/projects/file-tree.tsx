const files = [
    "app/",
    "app/page.tsx",
    "app/projects/",
    "app/projects/page.tsx",
    "components/",
    "components/interface/",
    "components/interface/interface-chat.tsx",
    "components/interface/plan-panel.tsx",
    "components/interface/sidebar.tsx",
    "components/projects/",
    "components/projects/project-search.tsx",
    "components/projects/repository-card.tsx",
    "components/projects/file-tree.tsx",
    "components/projects/index.ts",
    "lib/",
    "lib/auth.ts",
    "lib/nav.ts",
    "types/",
    "types/project.ts",
    "package.json",
    "next.config.ts",
    "tsconfig.json",
    "README.md",
  ];
  
  export function FileTree() {
    return (
      <div className="max-h-[560px] overflow-auto p-4 font-mono text-sm">
        {files.map((file) => {
          const isFolder = file.endsWith("/");
  
          return (
            <div
              key={file}
              className="grid grid-cols-[24px_1fr_auto] items-center border-b border-[#d8d8d2] py-2"
            >
              <span className="font-black">
                {isFolder ? "▸" : "·"}
              </span>
  
              <span
                className={
                  isFolder
                    ? "font-black text-[#111111]"
                    : "font-semibold text-[#333333]"
                }
              >
                {file}
              </span>
  
              <span className="text-[10px] font-black uppercase text-[#777777]">
                {isFolder ? "dir" : "file"}
              </span>
            </div>
          );
        })}
      </div>
    );
  }