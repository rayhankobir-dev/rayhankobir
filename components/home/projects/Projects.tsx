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
    title: "Soccer",
    imgSrc: "/projects/soccer.png",
    code: "https://github.com/rayhankobir-dev/sports-frontend",
    projectLink: "https://sports-release.vercel.app/",
    tech: ["React", "Node", "Express", "MongoDB", "Cloudinary"],
    description:
      "A soccer club training management application using MERN stack presented challenges in ensuring seamless video upload and playback functionality while maintaining security and access controls for coaches and players.",
    modalContent: (
      <>
        <p>
          Building a soccer club training management application using React,
          Node.js, Express, and MongoDB presented challenges in ensuring
          seamless video upload and playback functionality while maintaining
          security and access controls for coaches and players. Integrating user
          management features for admins to oversee training sessions and player
          progress added complexity to the application&apos;s architecture and
          user interface design.
        </p>
        <p>
          Challenge is optimize podcasts loading time and smooth audio playback.
        </p>
      </>
    ),
  },
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
      "Provides the ability to see the solution of puzzle game with iteration tree using  A* Search Algorithm.",
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
    imgSrc: "/projects/taskify.png",
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
  {
    title: "Token Based Authentication",
    imgSrc: "/projects/token-auth.png",
    code: "https://github.com/rayhankobir-dev/obeey-api",
    projectLink: "https://github.com/rayhankobir-dev/obeey-api",
    tech: ["Node.js", "Express.js", "Prisma", "JWT"],
    description:
      "Built a authentication and authorization based on Refresh token by using jwt, prisma, postgresql and express.",
    modalContent: (
      <>
        <p>
          An authentication and authorization system is crucial for protecting
          sensitive data and ensuring that only authorized users can access
          specific resources. I have built a robust authentication and
          authorization system using JSON Web Tokens (JWTs), Prisma, PostgreSQL,
          and Express.
        </p>
      </>
    ),
  },
  {
    title: "Hamming Code Visualizer",
    imgSrc: "/projects/hamming-code.png",
    code: "https://visualizer-tan.vercel.app/#/heyming",
    projectLink: "https://github.com/rayhankobir-dev/visualizer",
    tech: ["React.js", "Hamming Code", "Algorithms"],
    description:
      "Developed a Hamming code visualizer using React to enhance the understanding of error correcting codes.",
    modalContent: (
      <>
        <p>
          Developed a Hamming code visualizer using React to enhance the
          understanding of error correcting codes. The main challenge was to
          interactive visualizations that effectively convey the encoding and
          decoding processes of Hamming codes
        </p>
      </>
    ),
  },
];
