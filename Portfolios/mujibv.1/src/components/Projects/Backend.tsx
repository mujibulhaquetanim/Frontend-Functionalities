import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const services = [
  {
    name: "AWS",
    link: "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/DevOps",
    layout:
      "col-span-12 row-span-6 md:col-span-6 md:row-span-8 lg:col-span-4 lg:row-span-8 lg:col-start-1 lg:row-start-1",
  },
  {
    name: "NestJS",
    link: "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/NestJs",
    layout:
      "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3 lg:col-start-5 lg:row-start-1",
  },
  {
    name: "Golang",
    link: "https://github.com/mujibulhaquetanim/GoLang",
    layout:
      "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6 lg:col-start-9 lg:row-start-1",
  },
  {
    name: "More backend services",
    link: "https://github.com/mujibulhaquetanim/Backend-Functionalities",
    layout:
      "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6 lg:col-start-5 lg:row-start-4",
  },
  {
    name: "Database",
    link: "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/Databases",
    layout:
      "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6 lg:col-start-9 lg:row-start-7",
  },
  {
    name: "Auth",
    link: "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/Authentication",
    layout:
      "col-span-12 row-span-3 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-4 lg:col-start-1 lg:row-start-9",
  },
  {
    name: "Langchain",
    link: "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/LangChain-js",
    layout:
      "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3 lg:col-start-5 lg:row-start-10",
  },
];

const Backend = () => {
  return (
    // At lg every tile has an explicit position and each column spans exactly 12 rows:
    //   col 1-4: AWS(8) + Auth(4) · col 5-8: NestJS(3) + More(6) + Langchain(3) · col 9-12: Golang(6) + Database(6)
    <div className="w-full px-4 py-2 lg:h-full lg:p-2">
      <ul className="grid w-full gap-4 auto-rows-[minmax(3.3rem,auto)] grid-cols-12 lg:h-full lg:[grid-auto-rows:unset] lg:[grid-template-rows:repeat(12,minmax(0,1fr))]">
        {services.map((service, i) => (
          <motion.li
            key={service.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.05,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={service.layout}
          >
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tile tile-link group relative flex h-full items-center justify-center overflow-hidden p-4"
            >
              <span className="flex flex-col items-center gap-2 text-center transition-transform duration-300 ease-out-expo group-hover:scale-[1.03]">
                <span className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-white text-balance break-words">
                  {service.name}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs md:text-sm text-slate-300">
                  <FaGithub aria-hidden className="size-3.5" />
                  View code on GitHub
                </span>
              </span>
              <ArrowUpRight
                aria-hidden
                className="absolute right-4 top-4 size-5 text-white opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 ease-out-expo group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-focus-visible:opacity-100"
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Backend;
