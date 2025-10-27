import { projectsData } from "@/data/projects";
import { Laptop, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              <ul className="list-disc list-inside text-gray-500 mb-4 text-sm">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="text-[#FDC435] hover:underline text-sm flex justify-center items-center gap-1"
                >
                  <Network size={26}/> Live Site
                </Link>
                <Link
                  href={project.repoLink}
                  target="_blank"
                  className="text-gray-600 hover:underline text-sm flex justify-center items-center gap-1"
                >
                  <Laptop size={26} /> View Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
