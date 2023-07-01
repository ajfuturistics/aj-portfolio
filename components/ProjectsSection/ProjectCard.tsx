import Image from "next/image";
import Link from "next/link";
import { AiFillTool, AiFillGithub } from "react-icons/ai";
import React from "react";

const ProjectCard = ({ title, desc, stack, source }: ProjectData) => {
  return (
    <article className="flex flex-col dark:bg-gray-800 bg-white overflow-hidden border border-black dark:border-emerald-500">
      {/* <Image
        alt=""
        className="object-cover w-full h-52 dark:bg-gray-500"
        src={"/assets/images/placeholder.jpg"}
        width="0"
        height="0"
        sizes="100vw"
      /> */}

      <div className="flex flex-col p-2 gap-1">
        <h3 className="flex-1 py-2 text-lg font-semibold uppercase">{title}</h3>
        <p>{desc}</p>
        <p>
          <span className="font-semibold">Tech Stack:</span> {stack}
        </p>

        <div className="flex flex-wrap justify-between pt-3 space-x-2 font-semibold">
          <Link
            className="h-10 flex items-center justify-center gap-1 font-semibold px-6 border border-black dark:hover:border-white dark:border-emerald-500 hover:bg-black hover:text-white transition duration-500 ease-in-out"
            href={`${source}`}
          >
            <AiFillGithub size={20} />
            <span>Source Code</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
