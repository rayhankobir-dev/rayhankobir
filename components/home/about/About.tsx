import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello! I&apos;m Rayhan Kobir, and I&apos;m a passionate programmer
              and software developer proficient in JavaScript.
              <br />
              <br />I have experience working in web development worlds, with a
              focus on backend development. I&apos;m passionate about finding
              optimal solution of a problem and creating robhust solution. As
              well as, I am proficient in frontend development that provide a
              great user experience.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My skills include JavaScript, TypeScript, Node.js, Express.js,
              MongoDB, PostgreSQL, Redis, Firebase, Docker. And have also worked
              with various frontend frameworks like React and Next.js, enabling
              me to craft full-stack applications with seamless integration.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I enjoy playing sports. I believe that
              maintaining a healthy work-life balance is crucial for staying
              productive and motivated.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to
              learn and grow as a developer. If you&apos;re interested in
              working together or have any questions, please don&apos;t hesitate
              to get in touch! 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
