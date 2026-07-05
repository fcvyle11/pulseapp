export function ProjectSearch() {
    return (
      <div className="border-2 border-[#111111] bg-white">
        <input
          type="text"
          placeholder="Search repositories, files, branches..."
          className="h-14 w-full bg-transparent px-5 text-sm font-semibold text-[#111111] outline-none placeholder:text-[#777777]"
        />
      </div>
    );
  }