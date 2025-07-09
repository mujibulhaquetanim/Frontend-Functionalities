import { Link } from "react-router";

const Backend = () => {
  // Simulating fetched data without layout-specific classes.
  const services = [
    "AWS",
    "NestJS",
    "Golang",
    "More Backend Services",
    "Database",
    "Authentication",
    "Langchain",
  ];

  // Defined layout classes separately, hardcoded for now.
  const layoutClasses = [
    "col-span-12 row-span-6 md:col-span-6 md:row-span-8 lg:col-span-4 lg:row-span-8",
    "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3",
    "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6",
    "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6",
    "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6",
    "col-span-12 row-span-3 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-4",
    "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3",
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

  // Mapping images and layout classes to create grid. hardcoded classes.
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
              <div className="flex h-full items-center justify-center text-white text-7xl font-extrabold text-center">
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
