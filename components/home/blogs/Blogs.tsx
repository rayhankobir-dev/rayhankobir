import { SectionHeader } from "@/components/utils/SectionHeader";
import { Blog } from "./Blog";
import styles from "./blog.module.scss";

export const Blogs = () => {
  return (
    <section className="section-wrapper" id="blogs">
      <SectionHeader title="Blogs" dir="r" />

      <div className={styles.projects}>
        {projects?.map((project) => {
          return <Blog key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Difference between Call, Apply, Bind Methods",
    imgSrc: "/blogs/call-apply-bind.png",
    tech: ["JavaScript", "this"],
    blogLink:
      "https://rayhankobirdev.hashnode.dev/difference-between-call-apply-bind-methods",
    description:
      "The call, apply, and bind methods in JavaScript are all used to invoke a function with a specified this value. However, there are some key differences between the three methods.",
  },
];
