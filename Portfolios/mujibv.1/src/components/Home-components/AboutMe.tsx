import { NavLink } from "react-router";
import React from "react";

export default function AboutMe() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="min-h-screen backdrop-blur-xl grid grid-flow-col place-items-center place-content-center">
      <div className="grid place-items-center place-content-center grid-cols-12 grid-rows-8 gap-2 m-3 md:m-0">
        <div className="md:col-span-6 md:row-span-8 col-span-12 row-span-12 border-2 border-slate-700/80 bg-slate-600/80 text-white backdrop-blur-xl rounded-xl p-5 space-y-5 text-justify">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold underline text-center md:text-left">
            About Me
          </h1>
          <div className="hidden md:block space-y-3 text-gray-300 leading-relaxed">
            <p>
              👋 Hi, I'm Mujibul Haque Tanim, a passionate Computer Science
              graduate with a strong foundation in software engineering and data
              science. Throughout my degree, I cultivated a deep curiosity for
              programming, evolving into a commitment to mastering front-end,
              back-end, and data-driven solutions that make an impact.
            </p>
            <p>
              {" "}
              🎓 During my time as a Computer Science and Engineering student, I
              specialized in core programming languages like C, Java, and
              JavaScript, taking on challenging projects that sharpened my
              technical skills and problem-solving abilities.{" "}
            </p>
            <p>
              💻 Over time, I developed expertise in front-end development using
              Next.js and React, focusing on building dynamic, responsive user
              interfaces. On the back end, I emphasize security and scalability,
              working with NestJS and Golang to design clean architectures while
              adhering to industry best practices.{" "}
            </p>

            <p>
              🔧 I also have strong experience in API design, ensuring
              well-structured and reliable systems. My toolkit includes Git,
              Docker, Redis, DBMS, NGINX, Kafka, and message queues, which I use
              to streamline development and optimize infrastructure.{" "}
            </p>
            <p>
              {" "}
              📊 My skills in Python for data analysis, using tools like NumPy
              and Pandas, allow me to extract valuable insights from complex
              datasets. My thesis on predictive modeling applied advanced
              ensemble techniques and BERT-based NLP methods, demonstrating my
              ability to solve real-world problems with innovative data-driven
              solutions.{" "}
            </p>
            <p>
              🌱 Lifelong learning is at the heart of my approach. I
              continuously expand my knowledge through self-directed learning,
              online resources, and courses to stay at the cutting edge of
              technology. Additionally, I’ve explored my creative side with
              tools like Figma, Excalidraw, Photoshop, and Da Vinci, which have
              enhanced my ability to present ideas clearly and visually.
            </p>
          </div>
          {/* Mobile View */}
          <div className="md:hidden space-y-3 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            <p>
              👋 Hi, I'm Mujibul Haque Tanim, a passionate Computer Science
              graduate with a strong foundation in software engineering and data
              science. Throughout my degree, I cultivated a deep curiosity for
              programming, evolving into a commitment to mastering front-end,
              back-end, and data-driven solutions that make an impact.
            </p>
            <p>
              {" "}
              🎓 During my time as a Computer Science and Engineering student, I
              specialized in core programming languages like C, Java, and
              JavaScript, taking on challenging projects that sharpened my
              technical skills and problem-solving abilities.{" "}
            </p>
            <button
              className={
                show
                  ? "hidden"
                  : "border px-3 py-1 rounded-xl bg-slate-400 hover:bg-slate-700 hover:scale-105 transform duration-300"
              }
              onClick={() => setShow(!show)}
            >
              Read More...
            </button>
            {show ? (
              <div>
                {" "}
                <p>
                  💻 Over time, I developed expertise in front-end development
                  using Next.js and React, focusing on building dynamic,
                  responsive user interfaces. On the back end, I emphasize
                  security and scalability, working with NestJS and Golang to
                  design clean architectures while adhering to industry best
                  practices.{" "}
                </p>
                <p>
                  🔧 I also have strong experience in API design, ensuring
                  well-structured and reliable systems. My toolkit includes Git,
                  Docker, Redis, DBMS, NGINX, Kafka, and message queues, which I
                  use to streamline development and optimize infrastructure.{" "}
                </p>
                <p>
                  {" "}
                  📊 My skills in Python for data analysis, using tools like
                  NumPy and Pandas, allow me to extract valuable insights from
                  complex datasets. My thesis on predictive modeling applied
                  advanced ensemble techniques and BERT-based NLP methods,
                  demonstrating my ability to solve real-world problems with
                  innovative data-driven solutions.{" "}
                </p>
                <p>
                  🌱 Lifelong learning is at the heart of my approach. I
                  continuously expand my knowledge through self-directed
                  learning, online resources, and courses to stay at the cutting
                  edge of technology. Additionally, I’ve explored my creative
                  side with tools like Figma, Excalidraw, Photoshop, and Da
                  Vinci, which have enhanced my ability to present ideas clearly
                  and visually.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Education */}
        <div className="md:col-span-6 md:row-span-4 col-span-12 row-span-12 border-2 border-slate-600/80 bg-slate-600/80 text-white backdrop-blur-xl rounded-xl p-5 space-y-6">
          <div className="text-lg sm:text-xl lg:text-2xl underline font-bold text-center md:text-left">
            Education
          </div>
          <div className="space-y-4">
            <h1 className="text-base sm:text-lg lg:text-xl font-semibold">
              Master of Science (MSc) in Computer Science and Engineering
            </h1>
            <NavLink
              to={"https://www.iiuc.ac.bd/"}
              target="_blank"
              className="text-sm sm:text-base lg:text-lg cursor-pointer hover:underline text-blue-300"
            >
              International Islamic University Chittagong, Chattogram,
              Bangladesh
            </NavLink>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300">
              Expected Completion: 2026
            </p>
          </div>

          <hr className="outline-none border border-gray-500" />

          <div className="space-y-4">
            <h1 className="text-base sm:text-lg lg:text-xl font-semibold">
              Bachelor of Science (BSc) in Computer Science and Engineering
            </h1>
            <NavLink
              to={"https://www.portcity.edu.bd/"}
              target="_blank"
              className="text-sm sm:text-base lg:text-lg cursor-pointer hover:underline text-blue-300"
            >
              Port City International University, Chattogram, Bangladesh
            </NavLink>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300">
              Completion: 2023
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="text-xl md:col-span-6 md:row-span-4 col-span-12 row-span-12 border-2 border-slate-700/80 bg-slate-700/80 text-white backdrop-blur-xl rounded-xl p-5">
          timeline
        </div>
      </div>
    </div>
  );
}
