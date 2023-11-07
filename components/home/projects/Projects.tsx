import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Obeey",
    imgSrc: "/projects/obeey.png",
    code: "https://github.com/rayhankobir-dev/obeey",
    projectLink: "https://obeey.vercel.app",
    tech: ["React", "Redux", "React Player", "Tailwind CSS", "Firebase"],
    description:
      "A podcast and audibook platform where user can find their preferable podcasts and audiobook.",
    modalContent: (
      <>
        <p>
          A podcast and audibook platform where user can find their preferable
          podcasts and audiobook. While implement this project I used React JS,
          Redux, and Firebase. Additionally podcasts are fetched from an
          external api.
        </p>
        <p>
          Challenge is optimize podcasts loading time and smooth audio playback.
        </p>
      </>
    ),
  },
  {
    title: "Puzzle Solver",
    imgSrc: "/projects/puzzle-solver.png",
    code: "https://github.com/rayhankobir-dev/puzzle-solver",
    projectLink: "https://puzzle-solver-lovat.vercel.app/",
    tech: ["React", "Algorithm", "API", "Tailwind CSS", "A* Search"],
    description:
      "A podcast and audibook platform where user can find their preferable podcasts and audiobook.",
    modalContent: (
      <>
        <p>
          Provides the ability to see the solution of puzzle game with iteration
          tree. To store each iteration it was though for me and I achieve by
          using recursion and A* Search Algorithm in the back-end of the
          application.
        </p>
      </>
    ),
  },
  {
    title: "Taskify-Task Management",
    imgSrc: "https://taskify-main.vercel.app/screenshot.png",
    code: "https://github.com/rayhankobir-dev/taskify",
    projectLink: "https://taskify-main.vercel.app",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    description:
      "A task management application built with react(context api), authentication and authorization. I've made backend api by using node.js and express with mongodb database.",
    modalContent: (
      <>
        <p>
          A task management application built with react(context api),
          authentication and authorization. I have made backend api by using
          node.js and express with mongodb database
        </p>
      </>
    ),
  },
];
