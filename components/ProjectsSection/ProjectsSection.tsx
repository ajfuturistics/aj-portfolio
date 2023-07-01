import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section className="dark:text-emerald-400 flex flex-col gap-2">
      <h2 className="text-xl lg:text-3xl font-semibold grow ">Projects: </h2>

      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <Link
          className="h-10 flex items-center justify-center gap-1 font-semibold px-6 bg-white border border-black dark:bg-gray-800 dark:border-emerald-500 dark:hover:border-white hover:bg-black hover:text-white transition duration-500 ease-in-out"
          href="https://github.com/ajfuturistics"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
