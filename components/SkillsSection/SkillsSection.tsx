import Image from "next/image";
import { skills } from "./data";

const SkillsSection = () => {
  return (
    <section className="dark:text-emerald-400 flex flex-col gap-2">
      <h2 className="text-xl lg:text-3xl font-semibold grow ">Skills: </h2>

      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(3.75rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(5.625rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(7.5rem,1fr))]">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="relative max-w-[8rem] w-full h-full my-0 mx-auto overflow-visible group border border-black dark:border-emerald-500"
          >
            <div className="bg-white flex flex-col justify-center items-center p-4 ">
              <Image
                src={skill.logoPath}
                alt={skill.name}
                className="w-10 h-10 group-hover:blur"
                width="0"
                height="0"
                sizes="100vw"
              />
              <h3 className="absolute text-black text-sm md:text-base lg:text-lg font-semibold transition-all -translate-y-2 duration-300 pointer-events-none opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                {skill.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
