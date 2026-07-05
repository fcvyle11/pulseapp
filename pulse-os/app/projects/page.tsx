import {
    ProjectSearch,
    RepositoryCard,
  } from "@/components/projects";
  
  export default function ProjectsPage() {
    return (
      <main className="min-h-screen bg-[#f4f4f1] px-6 py-6 text-[#111111]">
        <div className="mx-auto max-w-6xl">
          <ProjectSearch />
  
          <div className="mt-6">
            <RepositoryCard />
          </div>
        </div>
      </main>
    );
  }