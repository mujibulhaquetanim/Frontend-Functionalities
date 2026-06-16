import { Link } from "react-router";

const Backend = () => {
  const services = [
    "AWS",
    "NestJS",
    "Golang",
    "More Backend Services",
    "Database",
    "Auth",
    "Langchain",
  ];

  const layoutClasses = [
    "col-span-12 row-span-6 md:col-span-6 md:row-span-8 lg:col-span-4 lg:row-span-8 hover:scale-105 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300",
    "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3 hover:scale-105 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300",
    "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6 hover:scale-105 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300",
    "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6 hover:scale-75 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300",
    "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6 hover:scale-105 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300",
    "col-span-12 row-span-3 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-4 hover:scale-105 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300",
    "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3 hover:scale-105 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300",
  ];

  const links = [
    "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/DevOps",
    "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/NestJs",
    "https://github.com/mujibulhaquetanim/GoLang",
    "https://github.com/mujibulhaquetanim/Backend-Functionalities",
    "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/Databases",
    "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/Authentication",
    "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/LangChain-js",
  ];

  return (
    <div className="w-full px-4 py-2 lg:p-2">
      <div className="grid w-full gap-4 auto-rows-[minmax(3.3rem,auto)] grid-cols-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl bg-slate-600 ${layoutClasses[index]}`}
          >
            <Link
              to={links[index]}
              target="_blank"
              className="absolute inset-0"
            >
              <div className="flex h-full items-center justify-center text-white text-7xl font-extrabold text-center bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.09),transparent_35%)] backdrop-blur-sm p-4 transition-opacity duration-300">
                {service}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backend;
