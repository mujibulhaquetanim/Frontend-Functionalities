import { NavLink } from "react-router";

export default function AboutMe() {
  return (
    <div className="m-3 backdrop-blur-xl p-7 grid place-items-center place-content-center">
      <div className="border-2 m-3 border-slate-700/80 bg-slate-700/80 text-white backdrop-blur-xl rounded-xl p-5 space-y-5 text-justify">
        <h1 className="text-3xl font-bold underline">About Me</h1>
        <div className="text-lg space-y-3">
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
            📊 My skills in Python for data analysis, using tools like NumPy and
            Pandas, allow me to extract valuable insights from complex datasets.
            My thesis on predictive modeling applied advanced ensemble
            techniques and BERT-based NLP methods, demonstrating my ability to
            solve real-world problems with innovative data-driven solutions.{" "}
          </p>
          <p>
            🌱 Lifelong learning is at the heart of my approach. I continuously
            expand my knowledge through self-directed learning, online
            resources, and courses to stay at the cutting edge of technology.
            Additionally, I’ve explored my creative side with tools like Figma,
            Excalidraw, Photoshop, and Da Vinci, which have enhanced my ability
            to present ideas clearly and visually.
          </p>
        </div>
      </div>

      <div className="border-2 m-3 border-slate-700/80 bg-slate-700/80 text-white backdrop-blur-xl rounded-xl p-5 space-y-5">
        <div className="text-2xl underline">Education</div>
        <div>
          <h1 className="text-xl">
            Master of Science (MSc) in Computer Science and Engineering.
          </h1>
          <NavLink
            to={"https://www.iiuc.ac.bd/"}
            target="_blank"
            className="text-base cursor-pointer"
          >
            International Islamic University Chittagong. Chattogram, Bangladesh
          </NavLink>
          <p className="text-base">Expected Completion: 2026</p>
        </div>
        <div>
          <h1 className="text-xl">
            Bachelor of Science (BSc) in Computer Science and Engineering.
          </h1>
          <NavLink
            to={"https://www.portcity.edu.bd/"}
            target="_blank"
            className="text-base cursor-pointer"
          >
            Port City International University. Chattogram, Bangladesh
          </NavLink>
          <p className="text-base">Completion: 2023</p>
        </div>
      </div>

      <div className="text-xl">timeline</div>

      <div className="text-xl">Skills</div>
    </div>
  );
}
