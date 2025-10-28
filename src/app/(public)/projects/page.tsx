import ProjectCard from "@/components/modules/Project/ProjectCard";
import { projectsData } from "@/data/projects";

export const revalidate = 60;

export default async function ProjectsPage() {
  return (
    <section className="container mx-auto my-36">
      <h1 className="text-4xl mb-4 text-center">Project Showcase</h1>
      <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
        A selection of my personal and full-stack projects, showcasing both
        frontend and backend development skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
    </section>
  );
}
